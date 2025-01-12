import { LayoutPage } from '@components/Layout'
import { Link } from '@components/Link'
import { MetaTags } from '@components/MetaTags'
import MfundLogo from '@pages/assets/PageContact/logo-mfund.png'
import { ReactComponent as ImageLogoBmdvFoerderung } from './assets/PageContact/logo-bmdv-foerderung.svg'

export const ContactPage: React.FC = () => {
  return (
    <LayoutPage>
      <MetaTags
        noindex
        title="Kontakt und Impressum"
        description="Kontakt, Impressum sowie weitere Rechtliche Angaben"
      />
      <h1>Kontakt und Impressum</h1>
      <p>
        <strong>FixMyCity GmbH</strong>
        <br />
        Karlsgartenstraße 12
        <br />
        12049 Berlin
        <br />
        <Link to="feedback@fixmycity.de" mailSubject="Feedback Radverkehrsatlas">
          feedback@fixmycity.de
        </Link>
        <br />
        Telefon: <Link to="tel:+49-30-54908665">+49-30-54908665</Link>
        <br />
      </p>
      <p>Gesellschafter: Boris Hekele und Heiko Rintelen</p>
      <p>
        Registergericht: Amtsgericht Berlin-Charlottenburg
        <br />
        Registernummer: HRB 205031 B
      </p>
      <p>Umsatzsteuer-Identifikationsnummer gem. § 27a UStG: DE323489466</p>
      <p>Verantwortlicher i.S.v. § 55 Rundfunkstaatsvertrag (RStV): Boris Hekele</p>
      <h2>Feedback &amp; Kontakt</h2>
      <p>
        Wir freuen uns über Kommentare Anregungen und Unterstützung an{' '}
        <Link to="feedback@fixmycity.de" mailSubject="Feedback Radverkehrsatlas">
          feedback@fixmycity.de
        </Link>
      </p>
      <p>
        Du findest uns auch auf{' '}
        <Link external blank to="https://twitter.com/fixmyberlin">
          Twitter
        </Link>{' '}
        und{' '}
        <Link external blank to="https://www.linkedin.com/company/fixmycity">
          LinkedIn
        </Link>
      </p>
      <p>
        Sofern du Bugs oder Verbesserungsvorschläge hast, gib uns gerne{' '}
        <Link external blank to="https://github.com/FixMyBerlin/atlas-app">
          auf GitHub Feedback
        </Link>
        . Du kannst den Source Code auch weiterentwickeln. Lizenz:{' '}
        <Link to="https://github.com/FixMyBerlin/atlas-app/blob/develop/LICENSE.md" external blank>
          AGPL v3
        </Link>
        .
      </p>
      <h2>Urheberrechte Fotos</h2>
      <p>
        Wenn nicht anders angegeben stehen die auf dieser Website verwendeten Fotos unter{' '}
        <Link external blank to="https://creativecommons.org/licenses/by-nc/4.0/">
          Creative Commons-Lizenz BY-NC 4.0
        </Link>
        .
      </p>
      <h2>Förderung</h2>
      <p>
        Diese Website wird im Rahmen des mFund-Projektes “Kommunale Radverkehrsplanung und
        Instandhaltung aus OpenStreetMap-Daten ermöglichen – OSM-RVP” vom Bundesministerium für
        Digitales und Verkehr (BMDV) gefördert. <br />
        Förderkennzeichen 19F1096A,{' '}
        <Link
          external
          blank
          to="https://www.bmdv.bund.de/SharedDocs/DE/Artikel/DG/mfund-projekte/osm-rvp.html"
        >
          <strong>Projektsteckbrief</strong>
        </Link>
      </p>
      <div className="grid grid-cols-2 gap-2">
        <Link to="https://bmdv.bund.de/" external blank>
          <ImageLogoBmdvFoerderung title="Förderung durch BMDV" />
        </Link>
        <Link
          to="https://www.bmvi.de/DE/Themen/Digitales/mFund/Ueberblick/ueberblick.html"
          external
          blank
        >
          <img src={MfundLogo} alt="Förderung durch den mFund" className="w-40" />
        </Link>
      </div>
    </LayoutPage>
  )
}
