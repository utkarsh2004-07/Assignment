import React, { useState, useEffect } from 'react';
import { Header } from '../components/Header';
import { Card, StatCard } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { ScansTable } from '../components/ScansTable';
import { mockScans, mockProjectData } from '../data/mockData';
import styles from './Dashboard.module.css';

export const Dashboard = () => {
  const [scans, setScans] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate data loading
    const timer = setTimeout(() => {
      setScans(mockScans);
      setLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  const data = mockProjectData;

  return (
    <div className={styles.dashboard}>
      <Header
        title={data.name}
        subtitle={`Owner: ${data.owner}`}
        actions={[
          <Button key="new-scan" variant="primary">
            New Scan
          </Button>,
        ]}
      />

      <div className={styles.content}>
        {/* Overview Stats */}
        <div className={styles.statsGrid}>
          <StatCard
            label="Critical Severity"
            value={data.criticalVulnerabilities.count}
            changePercent={data.criticalVulnerabilities.changePercent}
            change={data.criticalVulnerabilities.change}
            trend={data.criticalVulnerabilities.trend}
            icon="🔴"
          />
          <StatCard
            label="High Severity"
            value={data.highVulnerabilities.count}
            changePercent={data.highVulnerabilities.changePercent}
            change={data.highVulnerabilities.change}
            trend={data.highVulnerabilities.trend}
            icon="🟠"
          />
          <StatCard
            label="Medium Severity"
            value={data.mediumVulnerabilities.count}
            changePercent={data.mediumVulnerabilities.changePercent}
            change={data.mediumVulnerabilities.change}
            trend={data.mediumVulnerabilities.trend}
            icon="🟡"
          />
          <StatCard
            label="Low Severity"
            value={data.lowVulnerabilities.count}
            changePercent={data.lowVulnerabilities.changePercent}
            change={data.lowVulnerabilities.change}
            trend={data.lowVulnerabilities.trend}
            icon="🟢"
          />
        </div>

        {/* Scans Section */}
        <Card className={styles.scansCard}>
          <div className={styles.scansHeader}>
            <div>
              <h2 className={styles.scansTitle}>Recent Scans</h2>
              <p className={styles.scansSubtitle}>
                Showing {scans.length} scans from your project
              </p>
            </div>
            <div className={styles.scansActions}>
              <button className={styles.filterBtn}>
                Filter <span>⚙️</span>
              </button>
              <button className={styles.columnBtn}>Columns</button>
            </div>
          </div>

          {loading ? (
            <div className={styles.skeleton}>
              <div className={styles.skeletonRow} />
              <div className={styles.skeletonRow} />
              <div className={styles.skeletonRow} />
            </div>
          ) : (
            <ScansTable scans={scans} />
          )}
        </Card>
      </div>
    </div>
  );
};
