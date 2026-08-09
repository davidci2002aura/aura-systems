import { useEffect, useState } from 'react';
import styles from './Navigation.module.css';

const Navigation: React.FC = () => {
  const [dark, setDark] = useState(
    () => document.documentElement.dataset.theme === 'dark'
  );
  const menuItems = ['Leistungen', 'Prozess', 'Preise', 'FAQ'];

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? 'dark' : 'light';
    localStorage.setItem('aura-theme', dark ? 'dark' : 'light');
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute('content', dark ? '#0d0d0f' : '#f5f5f7');
  }, [dark]);

  return (
    <nav className={styles.nav} role="navigation" aria-label="Hauptnavigation">
      <div className={styles.logo}>
        <div className={styles.logoText}>AURA</div>
        <div className={styles.logoSubtext}>Digital Systems</div>
      </div>

      <ul className={styles.menu} role="menubar">
        {menuItems.map((item) => (
          <li key={item} role="none">
            <a
              href={`#${item.toLowerCase()}`}
              className={styles.menuLink}
              role="menuitem"
            >
              {item}
            </a>
          </li>
        ))}
        <li role="none" className={styles.toggleItem}>
          <button
            type="button"
            className={styles.themeToggle}
            onClick={() => setDark((value) => !value)}
            aria-label={dark ? 'Helles Design aktivieren' : 'Dunkles Design aktivieren'}
            title={dark ? 'Helles Design' : 'Dunkles Design'}
          >
            <span aria-hidden="true">{dark ? '☀' : '☾'}</span>
          </button>
        </li>
        <li role="none">
          <a
            href="#kontakt"
            className={styles.ctaButton}
            role="menuitem"
            aria-label="Projekt starten - Kontaktformular öffnen"
          >
            Projekt starten →
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
