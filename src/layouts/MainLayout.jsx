import React from 'react';
import { Sidebar } from '../components/Sidebar';
import styles from './MainLayout.module.css';

export const MainLayout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Sidebar />
      <main className={styles.main}>{children}</main>
    </div>
  );
};
