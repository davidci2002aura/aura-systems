import styles from './SkipLink.module.css';

const SkipLink: React.FC = () => {
  return (
    <a href="#main-content" className={styles.skipLink}>
      Zum Hauptinhalt springen
    </a>
  );
};

export default SkipLink;
