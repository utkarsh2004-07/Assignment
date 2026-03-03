# Component Development Guide

## Adding New Components

This guide shows how to add new components to the APS Dashboard following the established patterns.

---

## 1. Creating a New UI Component

### Example: Alert Component

**File: `src/components/ui/Alert.jsx`**
```javascript
import React from 'react';
import styles from './Alert.module.css';

export const Alert = ({ 
  children, 
  type = 'info', // 'info', 'success', 'warning', 'error'
  onClose,
  className = '',
  ...props 
}) => {
  return (
    <div className={`${styles.alert} ${styles[type]} ${className}`} {...props}>
      <div className={styles.content}>{children}</div>
      {onClose && (
        <button 
          className={styles.closeBtn} 
          onClick={onClose}
          aria-label="Close alert"
        >
          ×
        </button>
      )}
    </div>
  );
};
```

**File: `src/components/ui/Alert.module.css`**
```css
.alert {
  padding: var(--space-4);
  border-radius: var(--radius-lg);
  border-left: 4px solid var(--primary);
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--space-3);
  animation: slideInDown 0.3s ease-out;
}

.info {
  background-color: rgba(59, 130, 246, 0.1);
  border-left-color: var(--info);
  color: var(--info);
}

.success {
  background-color: rgba(16, 185, 129, 0.1);
  border-left-color: var(--low);
  color: var(--low);
}

.warning {
  background-color: rgba(245, 158, 11, 0.1);
  border-left-color: var(--warning);
  color: var(--warning);
}

.error {
  background-color: rgba(239, 68, 68, 0.1);
  border-left-color: var(--critical);
  color: var(--critical);
}

.content {
  flex: 1;
}

.closeBtn {
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  line-height: 1;
  padding: 0;
  opacity: 0.6;
  transition: opacity var(--transition-fast);
}

.closeBtn:hover {
  opacity: 1;
}

@keyframes slideInDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

**Update: `src/components/ui/index.js`**
```javascript
export { Alert } from './Alert';
```

---

## 2. Creating a New Page Component

### Example: Vulnerabilities Page

**File: `src/pages/Vulnerabilities.jsx`**
```javascript
import React, { useState, useEffect } from 'react';
import { Header } from '../components/Header';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import styles from './Vulnerabilities.module.css';

export const Vulnerabilities = () => {
  const [vulnerabilities, setVulnerabilities] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate data fetching
    const timer = setTimeout(() => {
      setVulnerabilities([
        // Add mock data here
      ]);
      setLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className={styles.vulnerabilities}>
        <Header title="Vulnerabilities" />
        <div className={styles.loading}>Loading...</div>
      </div>
    );
  }

  return (
    <div className={styles.vulnerabilities}>
      <Header 
        title="Vulnerabilities" 
        subtitle="All discovered vulnerabilities"
        actions={[
          <Button key="export" variant="secondary">Export</Button>
        ]}
      />

      <div className={styles.content}>
        {/* Your content here */}
      </div>
    </div>
  );
};
```

**File: `src/pages/Vulnerabilities.module.css`**
```css
.vulnerabilities {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.content {
  flex: 1;
  overflow-y: auto;
  padding: var(--space-6);
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
}

.loading {
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  color: var(--text-secondary);
}
```

**Update: `src/pages/index.js`**
```javascript
export { Vulnerabilities } from './Vulnerabilities';
```

**Update: `src/App.jsx`**
```javascript
import { Vulnerabilities } from './pages';

// ... in Routes:
<Route path="/vulnerabilities" element={<Vulnerabilities />} />
```

**Update: `src/data/mockData.js`**
```javascript
export const menuItems = [
  // ... existing items
  { id: 'vulnerabilities', label: 'Vulnerabilities', icon: '⚠️', path: '/vulnerabilities' },
];
```

---

## 3. Creating a Custom Hook

### Example: useFetch Hook

**File: `src/hooks/useFetch.js`**
```javascript
import { useState, useEffect } from 'react';

export const useFetch = (url, options = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        // Replace with actual fetch
        const response = await fetch(url, options);
        if (!response.ok) throw new Error('Fetch failed');
        const json = await response.json();
        setData(json);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, options]);

  return { data, loading, error };
};
```

**Usage in a component:**
```javascript
import { useFetch } from '../hooks/useFetch';

export const MyComponent = () => {
  const { data, loading, error } = useFetch('/api/scans');
  
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  
  return <div>{/* Use data */}</div>;
};
```

---

## 4. Component Composition Pattern

### Layout Pattern
```javascript
// Always follow this structure:

import React from 'react';
import { Header } from '../components/Header'; // If needed
import { Card } from '../components/ui/Card';
import styles from './Component.module.css';

export const Component = () => {
  // State
  const [state, setState] = React.useState(null);

  // Effects
  React.useEffect(() => {
    // Load data
  }, []);

  // Handlers
  const handleClick = () => {};

  // Render
  return (
    <div className={styles.component}>
      <Header title="Title" />
      <div className={styles.content}>
        <Card>
          {/* Content */}
        </Card>
      </div>
    </div>
  );
};
```

---

## 5. Styling Patterns

### Always use CSS Modules:
```css
/* Component.module.css */

.container {
  padding: var(--space-4);
  background-color: var(--bg-primary);
}

.title {
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-semibold);
}

.button {
  padding: var(--space-2) var(--space-4);
  border-radius: var(--radius-md);
  transition: all var(--transition-fast);
}

.button:hover {
  background-color: var(--bg-secondary);
}
```

### Use CSS variables for everything:
- Colors: `var(--primary)`, `var(--critical)`
- Spacing: `var(--space-4)`, `var(--space-6)`
- Sizes: `var(--radius-md)`, `var(--font-size-lg)`
- Shadows: `var(--shadow-md)`
- Transitions: `var(--transition-fast)`

---

## 6. Naming Conventions

**Files & Folders:**
- Components: PascalCase → `MyComponent.jsx`
- Styles: kebab-case → `my-component.module.css`
- Hooks: camelCase → `useMyHook.js`
- Data: camelCase → `mockData.js`
- Folders: kebab-case → `my-folder/`

**CSS Classes:**
- Block: `.container`, `.card`, `.button`
- Element: `.button__icon`, `.card__header`
- Modifier: `.button--primary`, `.button--loading`

**React Props:**
- PascalCase for components → `<MyComponent />`
- camelCase for props → `title=""`, `isActive`

---

## 7. Component Reusability Checklist

Before considering a component "finished":

- [ ] Accept flexible props
- [ ] Has default values
- [ ] Supports className extension
- [ ] Exported from index file
- [ ] Uses CSS Modules
- [ ] Follows naming conventions
- [ ] Has clear imports/exports
- [ ] No hardcoded colors
- [ ] Responsive design
- [ ] Accessibility ready

---

## 8. Testing Components

Example test structure (ready for Jest):
```javascript
// Component.test.jsx
import { render, screen } from '@testing-library/react';
import { MyComponent } from './MyComponent';

describe('MyComponent', () => {
  it('renders without crashing', () => {
    render(<MyComponent />);
    expect(screen.getByText(/expected text/i)).toBeInTheDocument();
  });

  it('handles clicks', () => {
    const handleClick = jest.fn();
    render(<MyComponent onClick={handleClick} />);
    screen.getByButton('Click me').click();
    expect(handleClick).toHaveBeenCalled();
  });
});
```

---

## Quick Reference

### Add UI Component:
1. Create `src/components/ui/Component.jsx`
2. Create `src/components/ui/Component.module.css`
3. Export from `src/components/ui/index.js`
4. Use in other components

### Add Page:
1. Create `src/pages/PageName.jsx`
2. Create `src/pages/PageName.module.css`
3. Export from `src/pages/index.js`
4. Add route to `src/App.jsx`
5. Add menu item to `src/data/mockData.js`

### Add Hook:
1. Create `src/hooks/useHookName.js`
2. Use in components with `import { useHookName }`

### Import Order:
```javascript
// 1. React/external
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// 2. Components
import { Header } from '../components/Header';
import { Card } from '../components/ui/Card';

// 3. Hooks
import { useTheme } from '../hooks/useTheme';

// 4. Data/Utils
import { mockData } from '../data/mockData';

// 5. Styles
import styles from './Component.module.css';
```

---

**Happy building! 🚀**
