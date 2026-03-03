import React from 'react';
import { Header } from '../components/Header';
import { Card } from '../components/ui/Card';
import styles from './Projects.module.css';

export const Projects = () => {
  return (
    <div className={styles.projects}>
      <Header title="Projects" subtitle="Manage and view all your security projects" />
      <div className={styles.content}>
        <Card className={styles.emptyState}>
          <div className={styles.emptyIcon}>📁</div>
          <h2>No projects yet</h2>
          <p>Start by creating a new project to begin scanning for vulnerabilities.</p>
        </Card>
      </div>
    </div>
  );
};
