import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './PricingSection.module.css';

const PricingSection: React.FC = () => {
  const packages = [
    {
      name: 'STARTER',
      color: 'rgba(0,119,255,0.7)',
      bg: null,
      border: null,
      features: [
        'Onepager / Landingpage',
        'Responsive Design',
        'On-Page SEO',
        'Kontaktformular',
      ],
      off: ['A/B Testing', 'KI-Integration'],
    },
    {
      name: 'ENTERPRISE',
      color: 'rgba(0,119,255,0.9)',
      bg: 'rgba(0,119,255,0.06)',
      border: 'rgba(0,119,255,0.25)',
      featured: true,
      features: [
        'Bis zu 5 Unterseiten',
        'Premium Custom Design',
        'Technisches SEO',
        'Conversion Optimierung',
        'KI-Integration',
        '3 Monate Support',
      ],
      off: [],
    },
    {
      name: 'WORKFLOWS',
      color: 'rgba(34,197,94,0.8)',
      bg: null,
      border: 'rgba(34,197,94,0.15)',
      features: [
        'Custom n8n Logic',
        'API Integrationen',
        'Fehler-Monitoring',
        'Laufende Wartung',
        'Monatlich kündbar',
      ],
      off: [],
    },
    {
      name: 'VOICE AGENT',
      color: 'rgba(168,85,247,0.8)',
      bg: null,
      border: 'rgba(168,85,247,0.15)',
      features: [
        '24/7 Anrufannahme',
        'Mehrsprachig DE/EN/ES',
        'Stimmen wählbar',
        'System-Integration',
        'Monatlich kündbar',
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
          Transparente
          <br />
          <span className={styles.light}>Preise.</span>
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
      {pkg.featured && <div className={styles.badge}>POPULAR</div>}

      <div>
        <div className={styles.packageName} style={{ color: pkg.color }}>
          {pkg.name}
        </div>
        <div className={styles.price}>Auf Anfrage</div>
        <div className={styles.priceNote}>Projektbasis</div>
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
        className={styles.ctaButton}
        style={{
          background: pkg.featured ? '#0077ff' : 'transparent',
          color: pkg.featured ? '#fff' : 'rgba(255,255,255,0.5)',
          border: pkg.featured ? 'none' : '1px solid rgba(255,255,255,0.1)',
        }}
      >
        Anfragen →
      </a>
    </motion.div>
  );
};

export default PricingSection;
