import { Link } from '@components/Link'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { XMarkIcon, Bars3Icon } from '@heroicons/react/24/outline'
import { useMatchRoute } from '@tanstack/react-location'
import classNames from 'classnames'
import React, { Fragment } from 'react'
import { secondaryNavigationGrouped } from '../secondaryNavigation.const'

export const SecondaryNavigationDesktop: React.FC = () => {
  const matchRoute = useMatchRoute()

  return (
    <Disclosure as="div" className="hidden sm:block">
      {({ open }) => (
        <>
          <div className="flex items-center pr-2 sm:static sm:inset-auto sm:pr-0">
            <div className="relative ml-3">
              <Disclosure.Button className="inline-flex items-center justify-center rounded-md border border-gray-700 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                <span className="sr-only">Sekundärmenü öffnen</span>
                {open ? (
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                ) : (
                  <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                )}
              </Disclosure.Button>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Disclosure.Panel>
                <Menu as={Fragment}>
                  <Menu.Items
                    static
                    className="absolute right-0 mt-6 w-48 origin-top-right divide-y divide-gray-100 rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                  >
                    {secondaryNavigationGrouped.map((group, i) => {
                      return (
                        <div className="px-1 py-1" key={i}>
                          {group.map((item, gi) => {
                            // TOOD Links do not work ATM
                            return (
                              <Menu.Item key={gi}>
                                {({ active }) => (
                                  <Link
                                    to={item.href}
                                    className={classNames(
                                      active ? 'bg-gray-100' : '',
                                      matchRoute({ to: item.href })
                                        ? 'bg-gray-200'
                                        : '',
                                      'block px-4 py-2 text-sm text-gray-700'
                                    )}
                                  >
                                    {item.name}
                                  </Link>
                                )}
                              </Menu.Item>
                            )
                          })}
                        </div>
                      )
                    })}
                  </Menu.Items>
                </Menu>
              </Disclosure.Panel>
            </Transition>
          </div>
        </>
      )}
    </Disclosure>
  )
}
