import React, { useState, useEffect } from 'react';
import { Header } from '../components/Header';
import { Card } from '../components/ui/Card';
import { ScansTable } from '../components/ScansTable';
import { mockScans } from '../data/mockData';
import styles from './Scans.module.css';

export const Scans = () => {
  const [scans, setScans] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setScans(mockScans);
      setLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styles.scans}>
      <Header title="Scans" subtitle="View and manage all your security scans" />
      <div className={styles.content}>
        <Card className={styles.tableCard}>
          <div className={styles.header}>
            <h2 className={styles.title}>All Scans</h2>
          </div>
          {loading ? <div className={styles.loading}>Loading...</div> : <ScansTable scans={scans} />}
        </Card>
      </div>
    </div>
  );
};
