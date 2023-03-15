import {
  updateVerificationStatus,
  VerificationApiGet,
  VerificationApiPost,
} from '@api/index'
import { buttonStyles } from '@components/Link'
import { SourceVerificationApiIdentifier } from '@components/MapInterface/mapData'
import { useMapStateInteraction } from '@components/MapInterface/mapStateInteraction'
import { useUserStore } from '@components/MapInterface/UserInfo'
import { SmallSpinner } from '@components/Spinner/Spinner'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { clsx } from 'clsx'
import React from 'react'
import { ApproveButton, RejectButton } from './VerifcationActionButtons'

type Props = {
  apiIdentifier: SourceVerificationApiIdentifier
  visible: boolean
  disabled: boolean
  osmId: number
  verificationStatus: string | undefined
}

export const VerificationActions: React.FC<Props> = ({
  apiIdentifier,
  visible,
  disabled,
  osmId,
  verificationStatus,
}) => {
  const queryClient = useQueryClient()
  const { addLocalUpdate, removeLocalUpdate } = useMapStateInteraction()

  const { currentUser } = useUserStore()

  const apiData: VerificationApiPost = {
    apiIdentifier,
    osm_id: osmId,
    osm_type: 'W',
    verified_at: new Date().toISOString(),
    verified_by: currentUser?.id,
    verified_status: null, // Set inside the Button mutation below
    comment: 'test comment to check if stuff works',
  }

  const queryKey = ['verificationHistory', apiIdentifier, apiData.osm_id]

  const mutation = useMutation({
    mutationFn: updateVerificationStatus,
    // When mutate is called:
    onMutate: async ({ osm_id, osm_type, verified_at, verified_status }) => {
      const newHistoryItem: VerificationApiGet = {
        osm_id,
        osm_type,
        verified_at,
        verified_by: currentUser?.id,
        verified: verified_status,
      }

      // Cancel any outgoing refetches
      // (so they don't overwrite our optimistic update)
      await queryClient.cancelQueries({ queryKey })

      // Snapshot the previous value
      const previousHistory: VerificationApiGet[] | undefined =
        queryClient.getQueryData(queryKey)

      // Optimistically update to the new value
      queryClient.setQueryData(
        queryKey,
        (data: undefined | { data: VerificationApiGet[] }) => {
          const history = data?.data ? data.data : []
          return {
            data: [newHistoryItem, ...history],
          }
        }
      )

      addLocalUpdate(newHistoryItem)

      // Return a context object with the snapshotted value
      return { previousHistory, newHistoryItem }
    },
    // If the mutation fails, use the context returned from onMutate to roll back
    // use the context returned from onMutate to roll back
    onError: (_err, _variables, context) => {
      if (context) {
        queryClient.setQueryData(queryKey, context.previousHistory)
        removeLocalUpdate(context.newHistoryItem)
      }
    },
    // Always refetch after error or success:
    onSettled: () => {
      queryClient.invalidateQueries(queryKey)
    },
  })

  const verifiedOnce =
    verificationStatus && ['approved', 'rejected'].includes(verificationStatus)

  if (!visible) return null

  return (
    <div
      className={clsx('mb-4', {
        'flex items-center justify-between': verifiedOnce,
      })}
    >
      <h4 className="mb-2 font-semibold text-gray-600">
        Prüf-Status {verifiedOnce ? 'ändern' : 'eintragen'}
      </h4>
      {disabled && (
        <div className="mb-2">
          Ein Status kann nur eingetragen werden, wenn die Primärdaten
          vorliegen.
        </div>
      )}
      <div className="space-x-2">
        {mutation.isLoading && <SmallSpinner />}
        <ApproveButton
          // If already verified, show "the other button", else show both
          visible={verifiedOnce ? verificationStatus !== 'approved' : true}
          handleClick={() => {
            mutation.mutate({ ...apiData, verified_status: 'approved' })
          }}
          disabled={mutation.isLoading || disabled}
        >
          {verifiedOnce ? 'Daten richtig' : 'Richtig'}
        </ApproveButton>
        <RejectButton
          visible={verifiedOnce ? verificationStatus !== 'rejected' : true}
          handleClick={() => {
            mutation.mutate({ ...apiData, verified_status: 'rejected' })
          }}
          disabled={mutation.isLoading || disabled}
        >
          Daten überarbeiten
        </RejectButton>
      </div>
    </div>
  )
}
