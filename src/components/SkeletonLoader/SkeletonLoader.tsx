import styles from './SkeletonLoader.module.css';

const SkeletonLoader: React.FC = () => {
  return (
    <div className={styles.skeletonContainer}>
      <div className={styles.skeletonHeader}>
        <div className={styles.skeletonLine} style={{ width: '40%' }} />
        <div className={styles.skeletonLine} style={{ width: '30%' }} />
      </div>
      <div className={styles.skeletonContent}>
        <div className={styles.skeletonBlock} />
        <div className={styles.skeletonBlock} />
        <div className={styles.skeletonBlock} />
      </div>
    </div>
  );
};

export default SkeletonLoader;
