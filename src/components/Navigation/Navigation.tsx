import DarkModeToggle from '../DarkModeToggle/DarkModeToggle';
import styles from './Navigation.module.css';

const Navigation: React.FC = () => {
  const menuItems = ['Leistungen', 'Prozess', 'Preise', 'FAQ'];

  return (
    <nav className={styles.nav} role="navigation" aria-label="Hauptnavigation">
      <div className={styles.logo}>
        <div className={styles.logoText}>AURA</div>
        <div className={styles.logoSubtext}>Neural Architecture</div>
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
          <DarkModeToggle />
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
