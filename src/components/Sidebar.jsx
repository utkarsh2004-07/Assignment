import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../hooks/useTheme';
import { menuItems, bottomMenuItems } from '../data/mockData';
import styles from './Sidebar.module.css';

export const Sidebar = () => {
  const location = useLocation();
  const { isDark, toggleTheme } = useTheme();
  const [isCollapsed, setIsCollapsed] = useState(false);

  const isActive = (path) => location.pathname === path;

  return (
    <aside className={`${styles.sidebar} ${isCollapsed ? styles.collapsed : ''}`}>
      <div className={styles.header}>
        <div className={styles.logo}>
          <div className={styles.logoBadge}>ops</div>
          {!isCollapsed && <span className={styles.logoText}>ops</span>}
        </div>
        <button
          className={styles.collapseBtn}
          onClick={() => setIsCollapsed(!isCollapsed)}
          title={isCollapsed ? 'Expand' : 'Collapse'}
        >
          {isCollapsed ? '→' : '←'}
        </button>
      </div>

      <nav className={styles.nav}>
        <div className={styles.navSection}>
          {menuItems.map((item) => (
            <Link
              key={item.id}
              to={item.path}
              className={`${styles.navItem} ${isActive(item.path) ? styles.active : ''}`}
              title={isCollapsed ? item.label : ''}
            >
              <span className={styles.icon}>{item.icon}</span>
              {!isCollapsed && <span className={styles.label}>{item.label}</span>}
            </Link>
          ))}
        </div>

        <div className={styles.navSectionBottom}>
          {bottomMenuItems.map((item) => (
            <Link
              key={item.id}
              to={item.path}
              className={`${styles.navItem} ${isActive(item.path) ? styles.active : ''}`}
              title={isCollapsed ? item.label : ''}
            >
              <span className={styles.icon}>{item.icon}</span>
              {!isCollapsed && <span className={styles.label}>{item.label}</span>}
            </Link>
          ))}

          <button
            className={styles.themeToggle}
            onClick={toggleTheme}
            title={isDark ? 'Light mode' : 'Dark mode'}
          >
            <span className={styles.icon}>{isDark ? '☀️' : '🌙'}</span>
            {!isCollapsed && (
              <span className={styles.label}>{isDark ? 'Light' : 'Dark'}</span>
            )}
          </button>
        </div>
      </nav>

      <div className={styles.footer}>
        {!isCollapsed && (
          <>
            <div className={styles.userInfo}>
              <div className={styles.avatar}>admin</div>
              <div className={styles.userDetails}>
                <div className={styles.userName}>admin@aops.com</div>
                <div className={styles.userRole}>Security Lead</div>
              </div>
            </div>
          </>
        )}
      </div>
    </aside>
  );
};
