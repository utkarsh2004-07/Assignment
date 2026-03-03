import React from 'react';
import styles from './Badge.module.css';

export const Badge = ({ children, variant = 'default', className = '', ...props }) => {
  return (
    <span className={`${styles.badge} ${styles[variant]} ${className}`} {...props}>
      {children}
    </span>
  );
};

export const StatusBadge = ({ status = 'completed' }) => {
  const statusMap = {
    completed: { label: 'Completed', variant: 'success' },
    scheduled: { label: 'Scheduled', variant: 'warning' },
    failed: { label: 'Failed', variant: 'error' },
    'in-progress': { label: 'In Progress', variant: 'info' },
    open: { label: 'Open', variant: 'error' },
  };

  const { label, variant } = statusMap[status] || { label: status, variant: 'default' };

  return <Badge variant={variant}>{label}</Badge>;
};

export const SeverityBadge = ({ severity = 'low' }) => {
  const severityMap = {
    critical: { icon: '●', class: 'critical' },
    high: { icon: '●', class: 'high' },
    medium: { icon: '●', class: 'medium' },
    low: { icon: '●', class: 'low' },
  };

  const { icon, class: className } = severityMap[severity.toLowerCase()] || severityMap.low;

  return (
    <span className={`${styles.severityDot} ${styles[className]}`} title={severity}>
      {icon}
    </span>
  );
};
