import React from 'react';
import { Header } from '../components/Header';
import { Card } from '../components/ui/Card';
import styles from './PageTemplate.module.css';

export const Notifications = () => {
  return (
    <div className={styles.page}>
      <Header title="Notifications" subtitle="Manage your notification settings and preferences" />
      <div className={styles.content}>
        <Card className={styles.emptyState}>
          <div className={styles.emptyIcon}>🔔</div>
          <h2>Notifications Settings</h2>
          <p>Configure how and when you receive alerts about your scans.</p>
        </Card>
      </div>
    </div>
  );
};
