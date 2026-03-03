import React from 'react';
import styles from './ProgressBar.module.css';

export const ProgressBar = ({ progress = 0, size = 'md', animated = true }) => {
  return (
    <div className={`${styles.container} ${styles[size]}`}>
      <div
        className={`${styles.bar} ${animated ? styles.animated : ''}`}
        style={{ width: `${Math.min(progress, 100)}%` }}
      />
    </div>
  );
};
