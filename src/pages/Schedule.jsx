import React from 'react';
import { Header } from '../components/Header';
import { Card } from '../components/ui/Card';
import styles from './PageTemplate.module.css';

export const Schedule = () => {
  return (
    <div className={styles.page}>
      <Header title="Schedule" subtitle="Manage scheduled scans and automation" />
      <div className={styles.content}>
        <Card className={styles.emptyState}>
          <div className={styles.emptyIcon}>📅</div>
          <h2>No scheduled scans</h2>
          <p>Create a new schedule to automate your security scans.</p>
        </Card>
      </div>
    </div>
  );
};
