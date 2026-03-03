import React from 'react';
import styles from './Card.module.css';

export const Card = ({ children, className = '', ...props }) => {
  return (
    <div className={`${styles.card} ${className}`} {...props}>
      {children}
    </div>
  );
};

export const StatCard = ({ label, value, change, changePercent, trend = 'neutral', icon }) => {
  return (
    <Card className={styles.statCard}>
      <div className={styles.header}>
        <div className={styles.labelSection}>
          <h3 className={styles.label}>{label}</h3>
        </div>
        {icon && <div className={styles.icon}>{icon}</div>}
      </div>
      <div className={styles.valueSection}>
        <div className={styles.value}>{value}</div>
        <div className={`${styles.change} ${styles[trend]}`}>
          <span className={styles.changeText}>
            {trend === 'increase' && '↑ '}
            {trend === 'decrease' && '↓ '}
            {changePercent}
          </span>
          <span className={styles.changeSubtext}>{change}</span>
        </div>
      </div>
    </Card>
  );
};
