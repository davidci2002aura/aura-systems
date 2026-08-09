import ContactForm from '../components/ContactForm/ContactForm';
import Footer from '../components/Footer/Footer';
import styles from './Pages.module.css';

const ContactPage: React.FC = () => <><main className={styles.page}><section className={`${styles.simpleHero} ${styles.contactHero}`}><div><span>Projekt starten</span><h1>Ein Link und zwei Sätze reichen.</h1><p>Sie erhalten eine ehrliche Einschätzung, ob ein QuickFix genügt oder eine größere Lösung sinnvoll ist.</p></div><aside className={styles.contactPreview}><span>SO GEHT ES WEITER</span>{[['01','Anfrage einordnen'],['02','Offene Punkte klären'],['03','Umfang & Preis festhalten']].map(([num,label])=><div key={num}><i>{num}</i><strong>{label}</strong><b>✓</b></div>)}<p>Keine automatische Beauftragung. Erst nach einem klaren Angebot entscheiden Sie.</p></aside></section><ContactForm /></main><Footer /></>;
export default ContactPage;
