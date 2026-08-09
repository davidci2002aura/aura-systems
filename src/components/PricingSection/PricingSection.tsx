import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './PricingSection.module.css';

const PricingSection: React.FC = () => {
  const packages = [
    {
      name: 'WEBSITE-QUICKFIX',
      price: '149 €',
      priceNote: 'einmalig',
      color: '#6d607f',
      bg: null,
      border: null,
      features: [
        'Bis zu 3 klar definierte Reparaturen',
        'Mobilansicht, Kontakt oder Inhalte',
        'Funktionsprüfung nach der Änderung',
        'Kurze Übergabe',
      ],
      off: ['Kompletter Neuaufbau', 'Bezahlte Fremddienste'],
    },
    {
      name: 'MODERNER ONEPAGER',
      price: '790 €',
      priceNote: 'einmalig',
      color: '#111111',
      bg: 'rgba(109,96,127,0.06)',
      border: 'rgba(109,96,127,0.25)',
      featured: true,
      features: [
        'Individuelle, klare Seitenstruktur',
        'Mobil optimierte Umsetzung',
        'Leistungen, Vertrauen und Kontakt',
        'Technische Basis für Suchmaschinen',
        'Eine Korrekturrunde',
        'Übergabe auf vorhandene Domain',
      ],
      off: [],
    },
    {
      name: 'ONEPAGER + BETREUUNG',
      price: '790 € + 79 €/Monat',
      priceNote: 'monatlich kündbar',
      color: '#7c6b5e',
      bg: null,
      border: 'rgba(124,107,94,0.18)',
      features: [
        'Alle Leistungen des Onepagers',
        'Kleine laufende Textänderungen',
        'Regelmäßiger Funktionscheck',
        'Direkter Ansprechpartner',
        'Monatlich kündbar',
      ],
      off: [],
    },
    {
      name: 'KI-TELEFON-PILOT',
      price: 'ab 690 €',
      priceNote: 'zzgl. Anbietergebühren',
      color: '#6d607f',
      bg: null,
      border: 'rgba(109,96,127,0.18)',
      features: [
        'Annahme nur im vereinbarten Fall',
        'Transparente KI-Begrüßung',
        'Rückrufdaten und Anliegen aufnehmen',
        'Eigener Test vor Aktivierung',
        'Fremdkosten vorab ausweisen',
        '30 Tage technische Nachprüfung',
      ],
      off: [],
    },
  ];

  return (
    <section id="preise" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.sectionTag}>
          <span className={styles.tagLine} /> Investition
        </div>
        <h2 className={styles.sectionTitle}>
          Pakete
        </h2>

        <motion.div
          className={styles.grid}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {packages.map((pkg, i) => (
            <PricingCard key={i} pkg={pkg} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

interface PricingCardProps {
  pkg: {
    name: string;
    color: string;
    bg: string | null;
    border: string | null;
    featured?: boolean;
    price: string;
    priceNote: string;
    features: string[];
    off: string[];
  };
}

const PricingCard: React.FC<PricingCardProps> = ({ pkg }) => {
  const [hov, setHov] = useState(false);

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      className={styles.card}
      style={{
        background: pkg.bg || 'rgba(0, 0, 0, 0.3)',
        border: `1px solid ${pkg.border || 'rgba(255,255,255,0.15)'}`,
        backdropFilter: hov ? 'blur(16px) saturate(200%)' : 'blur(8px) saturate(190%)',
        WebkitBackdropFilter: hov ? 'blur(16px) saturate(200%)' : 'blur(8px) saturate(190%)',
      }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      {pkg.featured && <div className={styles.badge}>EMPFOHLEN</div>}

      <div>
        <div className={styles.packageName} style={{ color: pkg.color }}>
          {pkg.name}
        </div>
        <div className={styles.price}>{pkg.price}</div>
        <div className={styles.priceNote}>{pkg.priceNote}</div>
      </div>

      <div className={styles.divider} />

      <ul className={styles.featureList}>
        {pkg.features.map((f) => (
          <li key={f} className={styles.feature}>
            <span className={styles.checkmark} style={{ color: pkg.color }}>
              ✓
            </span>
            {f}
          </li>
        ))}
        {pkg.off.map((f) => (
          <li key={f} className={`${styles.feature} ${styles.disabled}`}>
            <span className={styles.dash}>—</span>
            {f}
          </li>
        ))}
      </ul>

      <a
        href="#kontakt"
        className={`${styles.ctaButton} ${pkg.featured ? styles.featuredCta : ''}`}
      >
        Anfragen →
      </a>
    </motion.div>
  );
};

export default PricingSection;
