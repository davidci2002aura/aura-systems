import Footer from '../components/Footer/Footer';
import styles from './LegalPage.module.css';

type LegalPageProps = {
  type: 'impressum' | 'datenschutz';
};

const LegalPage: React.FC<LegalPageProps> = ({ type }) => {
  const isImprint = type === 'impressum';

  return (
    <>
      <main className={styles.page}>
        <div className={styles.shell}>
          <a className={styles.back} href="/">← Zurück zu Aura Systems</a>
          <p className={styles.eyebrow}>Rechtliche Informationen</p>
          <h1>{isImprint ? 'Impressum' : 'Datenschutz'}</h1>

          {isImprint ? <Imprint /> : <Privacy />}
        </div>
      </main>
      <Footer />
    </>
  );
};

const Imprint = () => (
  <div className={styles.content}>
    <section>
      <h2>Angaben gemäß § 5 DDG</h2>
      <p>
        David Lamberts<br />
        Aura Systems<br />
        Am Bergle 28<br />
        88284 Schlier
      </p>
    </section>
    <section>
      <h2>Kontakt</h2>
      <p>
        Telefon: <a href="tel:+4917691336194">0176 91336194</a><br />
        E-Mail: <a href="mailto:david.lamberts@aurasystems.ltd">david.lamberts@aurasystems.ltd</a>
      </p>
    </section>
    <section>
      <h2>Verbraucherstreitbeilegung</h2>
      <p>
        Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
        Verbraucherschlichtungsstelle teilzunehmen.
      </p>
    </section>
  </div>
);

const Privacy = () => (
  <div className={styles.content}>
    <section>
      <h2>1. Verantwortlicher</h2>
      <p>
        David Lamberts, Aura Systems, Am Bergle 28, 88284 Schlier<br />
        Telefon: <a href="tel:+4917691336194">0176 91336194</a><br />
        E-Mail: <a href="mailto:david.lamberts@aurasystems.ltd">david.lamberts@aurasystems.ltd</a>
      </p>
    </section>
    <section>
      <h2>2. Hosting und technische Zugriffsdaten</h2>
      <p>
        Diese Website wird über Vercel bereitgestellt. Beim Aufruf können technisch notwendige
        Verbindungsdaten wie IP-Adresse, Zeitpunkt, aufgerufene Seite, Browser- und Geräteangaben
        verarbeitet werden. Die Verarbeitung dient der sicheren und stabilen Bereitstellung der
        Website auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.
      </p>
      <p>
        Weitere Informationen: <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noreferrer">Datenschutzhinweise von Vercel</a>.
      </p>
    </section>
    <section>
      <h2>3. Kontakt- und Projektanfragen</h2>
      <p>
        Wenn Sie das Anfrageformular absenden, verarbeiten wir die von Ihnen eingegebenen Angaben
        zur Bearbeitung Ihrer Anfrage. Dazu gehören gewählte Leistung, Budgetrahmen, Name,
        E-Mail-Adresse und Ihre Nachricht. Die Übermittlung wird technisch über Make verarbeitet.
        Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO für vorvertragliche Anfragen und im Übrigen
        Art. 6 Abs. 1 lit. f DSGVO.
      </p>
      <p>
        Weitere Informationen: <a href="https://www.make.com/en/privacy-notice" target="_blank" rel="noreferrer">Datenschutzhinweise von Make</a>.
      </p>
    </section>
    <section>
      <h2>4. Lokale Einstellungen</h2>
      <p>
        Die Auswahl des hellen oder dunklen Designs wird ausschließlich lokal in Ihrem Browser
        gespeichert. Es werden derzeit keine Analyse- oder Marketing-Cookies eingesetzt.
      </p>
    </section>
    <section>
      <h2>5. Speicherdauer und Empfänger</h2>
      <p>
        Anfragedaten werden nur so lange gespeichert, wie dies zur Bearbeitung, für gesetzliche
        Aufbewahrungspflichten oder zur Geltendmachung und Abwehr von Ansprüchen erforderlich ist.
        Dienstleister erhalten Daten nur, soweit dies für Hosting oder Anfrageverarbeitung nötig ist.
      </p>
    </section>
    <section>
      <h2>6. Ihre Rechte</h2>
      <p>
        Sie haben im Rahmen der gesetzlichen Voraussetzungen Rechte auf Auskunft, Berichtigung,
        Löschung, Einschränkung der Verarbeitung und Datenübertragbarkeit. Außerdem können Sie
        einer Verarbeitung auf Grundlage berechtigter Interessen widersprechen und sich bei einer
        Datenschutzaufsichtsbehörde beschweren.
      </p>
    </section>
    <p className={styles.updated}>Stand: August 2026</p>
  </div>
);

export default LegalPage;
