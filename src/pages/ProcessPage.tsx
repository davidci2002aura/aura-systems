import ProcessSection from '../components/ProcessSection/ProcessSection';
import PricingSection from '../components/PricingSection/PricingSection';
import Footer from '../components/Footer/Footer';
import styles from './Pages.module.css';

const ProcessPage: React.FC = () => <><main className={styles.page}><section className={styles.simpleHero}><span>Vorgehensweise</span><h1>Klarer Umfang.<br />Prüfbare Zwischenstände.</h1><p>Jedes Projekt beginnt klein genug, um verstanden zu werden, und endet mit einer nachvollziehbaren Übergabe.</p></section><ProcessSection /><PricingSection /></main><Footer /></>;
export default ProcessPage;
