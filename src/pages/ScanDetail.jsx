import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Header } from '../components/Header';
import { Card } from '../components/ui/Card';
import { Badge, StatusBadge, SeverityBadge } from '../components/ui/Badge';
import { ProgressBar } from '../components/ui/ProgressBar';
import { Button } from '../components/ui/Button';
import { getScanDetails } from '../data/mockData';
import styles from './ScanDetail.module.css';

export const ScanDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [scan, setScan] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('findings');

  useEffect(() => {
    const timer = setTimeout(() => {
      const data = getScanDetails(id);
      setScan(data);
      setLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [id]);

  if (loading) {
    return (
      <div className={styles.loading}>
        <div className={styles.spinner} />
        <p>Loading scan details...</p>
      </div>
    );
  }

  if (!scan) {
    return (
      <div className={styles.notFound}>
        <h2>Scan not found</h2>
        <Button onClick={() => navigate('/scans')}>Back to Scans</Button>
      </div>
    );
  }

  return (
    <div className={styles.scanDetail}>
      <Header
        title={scan.name}
        subtitle={`Scan ID: ${scan.id} • Type: ${scan.type}`}
        actions={[
          <Button key="rescan" variant="primary">
            Rescan
          </Button>,
        ]}
      />

      <div className={styles.content}>
        {/* Overview Card */}
        <Card className={styles.overviewCard}>
          <div className={styles.overviewGrid}>
            <div className={styles.overviewItem}>
              <span className={styles.label}>Status</span>
              <StatusBadge status={scan.status.toLowerCase()} />
            </div>
            <div className={styles.overviewItem}>
              <span className={styles.label}>Progress</span>
              <div className={styles.progressContainer}>
                <ProgressBar progress={scan.progress} />
                <span className={styles.progressPercent}>{scan.progress}%</span>
              </div>
            </div>
            <div className={styles.overviewItem}>
              <span className={styles.label}>Last Scan</span>
              <span className={styles.value}>{scan.lastScan}</span>
            </div>
            <div className={styles.overviewItem}>
              <span className={styles.label}>Total Vulnerabilities</span>
              <span className={styles.vulnCount}>
                {Object.values(scan.vulnerability).reduce((a, b) => a + b, 0)}
              </span>
            </div>
          </div>

          <div className={styles.vulnerabilityBreakdown}>
            <div className={styles.vulnItem}>
              <div className={styles.vulnColor} style={{ backgroundColor: '#EF4444' }} />
              <span>Critical: {scan.vulnerability.critical}</span>
            </div>
            <div className={styles.vulnItem}>
              <div className={styles.vulnColor} style={{ backgroundColor: '#F97316' }} />
              <span>High: {scan.vulnerability.high}</span>
            </div>
            <div className={styles.vulnItem}>
              <div className={styles.vulnColor} style={{ backgroundColor: '#FBBF24' }} />
              <span>Medium: {scan.vulnerability.medium}</span>
            </div>
            <div className={styles.vulnItem}>
              <div className={styles.vulnColor} style={{ backgroundColor: '#10B981' }} />
              <span>Low: {scan.vulnerability.low}</span>
            </div>
          </div>
        </Card>

        {/* Tabs */}
        <Card className={styles.tabsCard}>
          <div className={styles.tabsHeader}>
            <button
              className={`${styles.tab} ${activeTab === 'findings' ? styles.active : ''}`}
              onClick={() => setActiveTab('findings')}
            >
              Findings ({scan.findings.length})
            </button>
            <button
              className={`${styles.tab} ${activeTab === 'log' ? styles.active : ''}`}
              onClick={() => setActiveTab('log')}
            >
              Execution Log
            </button>
          </div>

          {activeTab === 'findings' && (
            <div className={styles.findings}>
              {scan.findings.map((finding) => (
                <div key={finding.id} className={styles.findingItem}>
                  <div className={styles.findingHeader}>
                    <div className={styles.findingTitleSection}>
                      <div className={styles.findingSeverity}>
                        <SeverityBadge severity={finding.severity} />
                      </div>
                      <div>
                        <h3 className={styles.findingTitle}>{finding.title}</h3>
                        <p className={styles.findingDescription}>{finding.description}</p>
                      </div>
                    </div>
                    <div className={styles.findingMeta}>
                      <div className={styles.cvssScore}>CVSS {finding.cvss}</div>
                      <StatusBadge status={finding.status.toLowerCase()} />
                    </div>
                  </div>
                  <div className={styles.findingFooter}>
                    <span className={styles.timestamp}>Last updated: {finding.lastUpdated}</span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'log' && (
            <div className={styles.executionLog}>
              {scan.executionLog.map((entry, index) => (
                <div key={index} className={`${styles.logEntry} ${styles[entry.status]}`}>
                  <div className={styles.logTime}>
                    {new Date(entry.timestamp).toLocaleTimeString()}
                  </div>
                  <div className={styles.logMessage}>{entry.message}</div>
                  <div className={styles.logStatus}>{entry.status}</div>
                </div>
              ))}
            </div>
          )}
        </Card>
      </div>
    </div>
  );
};
