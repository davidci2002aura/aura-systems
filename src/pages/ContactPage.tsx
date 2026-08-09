import ContactForm from '../components/ContactForm/ContactForm';
import Footer from '../components/Footer/Footer';
import styles from './Pages.module.css';

const ContactPage: React.FC = () => <><main className={styles.page}><section className={styles.simpleHero}><span>Projekt starten</span><h1>Ein Link und zwei Sätze reichen.</h1><p>Sie erhalten eine ehrliche Einschätzung, ob ein QuickFix genügt oder eine größere Lösung sinnvoll ist.</p></section><ContactForm /></main><Footer /></>;
export default ContactPage;
