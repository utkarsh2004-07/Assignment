import React, { useState } from 'react';
import { useTheme } from '../hooks/useTheme';
import styles from './Header.module.css';

export const Header = ({ title, subtitle, actions = [] }) => {
  const { isDark } = useTheme();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <header className={styles.header}>
      <div className={styles.leftSection}>
        <div className={styles.titleSection}>
          <h1 className={styles.title}>{title}</h1>
          {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        </div>
      </div>

      <div className={styles.rightSection}>
        <div className={`${styles.searchBar} ${isSearchOpen ? styles.open : ''}`}>
          <input
            type="text"
            placeholder="Search scans by name or type..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setIsSearchOpen(true)}
            onBlur={() => !searchQuery && setIsSearchOpen(false)}
            className={styles.searchInput}
          />
          <span className={styles.searchIcon}>🔍</span>
        </div>

        {actions.length > 0 && <div className={styles.actions}>{actions}</div>}
      </div>
    </header>
  );
};
