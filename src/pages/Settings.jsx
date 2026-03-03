import React from 'react';
import { Header } from '../components/Header';
import { Card } from '../components/ui/Card';
import styles from './PageTemplate.module.css';

export const Settings = () => {
  return (
    <div className={styles.page}>
      <Header title="Settings" subtitle="Manage your account and application settings" />
      <div className={styles.content}>
        <Card className={styles.emptyState}>
          <div className={styles.emptyIcon}>⚙️</div>
          <h2>Application Settings</h2>
          <p>Customize your preferences and manage your account.</p>
        </Card>
      </div>
    </div>
  );
};
