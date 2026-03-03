import React from 'react';
import { Header } from '../components/Header';
import { Card } from '../components/ui/Card';
import styles from './PageTemplate.module.css';

export const Support = () => {
  return (
    <div className={styles.page}>
      <Header title="Support" subtitle="Get help with your account and scans" />
      <div className={styles.content}>
        <Card className={styles.emptyState}>
          <div className={styles.emptyIcon}>❓</div>
          <h2>Support & Documentation</h2>
          <p>Browse our knowledge base or contact our support team for assistance.</p>
        </Card>
      </div>
    </div>
  );
};
