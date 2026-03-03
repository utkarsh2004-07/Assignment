import React from 'react';
import { Link } from 'react-router-dom';
import { ProgressBar } from './ui/ProgressBar';
import { StatusBadge, SeverityBadge } from './ui/Badge';
import styles from './ScansTable.module.css';

export const ScansTable = ({ scans = [] }) => {
  return (
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Scan Name</th>
            <th>Type</th>
            <th>Status</th>
            <th>Progress</th>
            <th>Vulnerability</th>
            <th>Last Scan</th>
          </tr>
        </thead>
        <tbody>
          {scans.map((scan) => (
            <tr key={scan.id} className={styles.row}>
              <td className={styles.nameCell}>
                <Link to={`/scans/${scan.id}`} className={styles.scanLink}>
                  {scan.name}
                </Link>
              </td>
              <td>{scan.type}</td>
              <td>
                <StatusBadge status={scan.status.toLowerCase()} />
              </td>
              <td className={styles.progressCell}>
                <div className={styles.progressSection}>
                  <ProgressBar progress={scan.progress} />
                  <span className={styles.progressText}>{scan.progress}%</span>
                </div>
              </td>
              <td className={styles.vulnerabilityCell}>
                <div className={styles.severityIndicators}>
                  {scan.vulnerability.critical > 0 && (
                    <span
                      className={styles.severityBadge}
                      style={{ backgroundColor: '#EF4444' }}
                      title={`Critical: ${scan.vulnerability.critical}`}
                    >
                      {scan.vulnerability.critical}
                    </span>
                  )}
                  {scan.vulnerability.high > 0 && (
                    <span
                      className={styles.severityBadge}
                      style={{ backgroundColor: '#F97316' }}
                      title={`High: ${scan.vulnerability.high}`}
                    >
                      {scan.vulnerability.high}
                    </span>
                  )}
                  {scan.vulnerability.medium > 0 && (
                    <span
                      className={styles.severityBadge}
                      style={{ backgroundColor: '#FBBF24' }}
                      title={`Medium: ${scan.vulnerability.medium}`}
                    >
                      {scan.vulnerability.medium}
                    </span>
                  )}
                  {scan.vulnerability.low > 0 && (
                    <span
                      className={styles.severityBadge}
                      style={{ backgroundColor: '#10B981' }}
                      title={`Low: ${scan.vulnerability.low}`}
                    >
                      {scan.vulnerability.low}
                    </span>
                  )}
                </div>
              </td>
              <td className={styles.timeCell}>{scan.lastScan}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
