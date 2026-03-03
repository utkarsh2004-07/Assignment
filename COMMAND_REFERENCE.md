# APS Dashboard - Command Reference

Quick reference for common development tasks.

## 🚀 Getting Started

```bash
# Install dependencies (one time)
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint
```

---

## 📁 File Structure Quick Access

```
src/
├── App.jsx                    ← Main app file (edit to add routes)
├── main.jsx                   ← Entry point
├── App.css                    ← App styles
├── index.css                  ← Global styles (replaced by globals.css)
│
├── components/                ← Reusable components
│   ├── Header.jsx            ← Page header component
│   ├── Sidebar.jsx           ← Navigation sidebar
│   ├── ScansTable.jsx        ← Data table
│   ├── ui/                   ← Base UI components
│   │   ├── Button.jsx        ← Button component
│   │   ├── Badge.jsx         ← Badge component
│   │   ├── Card.jsx          ← Card component
│   │   ├── ProgressBar.jsx   ← Progress bar
│   │   └── index.js          ← UI exports
│   └── index.js              ← Component exports
│
├── pages/                     ← Page components
│   ├── Dashboard.jsx         ← Main dashboard
│   ├── Scans.jsx            ← Scans listing
│   ├── ScanDetail.jsx       ← Scan details
│   ├── Projects.jsx         ← Projects page
│   ├── Schedule.jsx         ← Schedule page
│   ├── Notifications.jsx    ← Notifications page
│   ├── Settings.jsx         ← Settings page
│   ├── Support.jsx          ← Support page
│   └── index.js             ← Page exports
│
├── layouts/                   ← Layout components
│   ├── MainLayout.jsx       ← Main layout
│   └── MainLayout.module.css
│
├── context/                   ← React Context
│   └── ThemeContext.jsx      ← Theme provider
│
├── hooks/                     ← Custom hooks
│   └── useTheme.js          ← Theme hook
│
├── data/                      ← Mock data
│   └── mockData.js          ← All app data
│
├── constants/                 ← Constants
│   └── colors.js            ← Color system
│
├── styles/                    ← Global styles
│   └── globals.css          ← CSS variables & resets
│
└── utils/                     ← Utilities (empty, ready to use)
```

---

## 🎯 Common Tasks

### Add a New Page

1. **Create component file:**
   ```bash
   # Create file: src/pages/NewPage.jsx
   ```

2. **Create styles file:**
   ```bash
   # Create file: src/pages/NewPage.module.css
   ```

3. **Export from pages:**
   ```javascript
   // Add to src/pages/index.js
   export { NewPage } from './NewPage';
   ```

4. **Add route:**
   ```javascript
   // Add to src/App.jsx Routes
   <Route path="/newpage" element={<NewPage />} />
   ```

5. **Add menu item:**
   ```javascript
   // Add to src/data/mockData.js menuItems
   { id: 'newpage', label: 'New Page', icon: '📄', path: '/newpage' }
   ```

### Add a New Component

1. **Create component:**
   ```bash
   # Create: src/components/NewComponent.jsx
   ```

2. **Create styles:**
   ```bash
   # Create: src/components/NewComponent.module.css
   ```

3. **Export it:**
   ```javascript
   // Add to src/components/index.js
   export { NewComponent } from './NewComponent';
   ```

### Change Colors

Option 1 - CSS Variables (easiest):
```css
/* Edit src/styles/globals.css */
:root {
  --primary: #NEW_COLOR;
  --critical: #NEW_COLOR;
  /* etc */
}
```

Option 2 - Color Constants:
```javascript
// Edit src/constants/colors.js
export const colors = {
  primary: '#NEW_COLOR',
  critical: '#NEW_COLOR',
  /* etc */
};
```

### Modify Mock Data

```javascript
// Edit src/data/mockData.js

// Change scans:
export const mockScans = [ /* ... */ ]

// Change stats:
export const mockProjectData = { /* ... */ }

// Change menu items:
export const menuItems = [ /* ... */ ]
```

### Update Typography

```css
/* Edit src/styles/globals.css */

:root {
  --font-size-base: 14px;    /* Change base size */
  --font-weight-medium: 500; /* Change weight */
  --line-height-normal: 1.5; /* Change line height */
}
```

### Update Spacing

```css
/* Edit src/styles/globals.css */

:root {
  --space-4: 16px;  /* Change any spacing value */
  --space-6: 24px;
}
```

---

## 🎨 Design System Values

### Colors
```javascript
// Primary
--primary: #0CC8A8              (Teal)
--primary-hover: #0AB295        (Darker teal)
--primary-light: #E8F8F5        (Light teal)

// Severity
--critical: #EF4444             (Red)
--high: #F97316                 (Orange)
--medium: #FBBF24               (Amber)
--low: #10B981                  (Green)

// Status
--success: #10B981              (Green)
--warning: #F59E0B              (Amber)
--error: #EF4444                (Red)
--info: #3B82F6                 (Blue)
```

### Spacing Units (base 4px)
```
--space-1: 4px
--space-2: 8px
--space-3: 12px
--space-4: 16px   (most common)
--space-5: 20px
--space-6: 24px   (padding in cards)
--space-8: 32px
--space-10: 40px
```

### Font Sizes
```
--font-size-xs: 12px
--font-size-sm: 13px
--font-size-base: 14px  (body text)
--font-size-lg: 16px
--font-size-xl: 18px
--font-size-2xl: 20px
--font-size-3xl: 24px   (page titles)
--font-size-4xl: 32px   (stat numbers)
```

### Weights
```
--font-weight-normal: 400
--font-weight-medium: 500   (labels)
--font-weight-semibold: 600 (headings)
--font-weight-bold: 700
```

### Border Radius
```
--radius-sm: 4px
--radius-md: 6px    (most common)
--radius-lg: 8px
--radius-xl: 12px
--radius-2xl: 16px
```

---

## 🔗 Import Paths

```javascript
// Components
import { Header, Sidebar, ScansTable } from '../components';
import { Button, Card, Badge } from '../components/ui';

// Pages
import { Dashboard, Scans } from '../pages';

// Context
import { ThemeContext } from '../context/ThemeContext';

// Hooks
import { useTheme } from '../hooks/useTheme';

// Data
import { mockScans, mockProjectData } from '../data/mockData';

// Constants
import { colors, getSeverityColor } from '../constants/colors';

// Styles
import styles from './Component.module.css';
```

---

## 🔄 Git Workflow

```bash
# Check status
git status

# Stage changes
git add .

# Commit
git commit -m "Add new feature"

# Push to remote
git push origin main
```

---

## 📊 Component Props Quick Reference

### Button
```javascript
<Button 
  variant="primary"      // primary, secondary, ghost, danger
  size="md"             // sm, md, lg
  onClick={handler}
  disabled={false}
  type="button"
>
  Click Me
</Button>
```

### Badge
```javascript
<Badge variant="success">Completed</Badge>
<StatusBadge status="completed" />
<SeverityBadge severity="critical" />
```

### Card
```javascript
<Card className="custom">
  Content
</Card>

<StatCard 
  label="Critical"
  value={86}
  change="+25"
  changePercent="+25.0%"
  trend="increase"  // increase, decrease, neutral
  icon="🔴"
/>
```

### ProgressBar
```javascript
<ProgressBar progress={75} size="md" animated={true} />
```

### Header
```javascript
<Header 
  title="Page Title"
  subtitle="Optional subtitle"
  actions={[
    <Button key="action">Action</Button>
  ]}
/>
```

### Sidebar
(Automatically included in MainLayout)

---

## 🌓 Theme Values

### Light Mode (default)
```css
--bg-primary: #FFFFFF
--bg-secondary: #F5F5F5
--bg-tertiary: #EEEEEE
--text-primary: #1F2937
--text-secondary: #6B7280
--border: #E5E7EB
```

### Dark Mode (via `[data-theme="dark"]`)
```css
--bg-primary: #0F0F0F
--bg-secondary: #1A1A1A
--bg-tertiary: #252525
--text-primary: #E5E5E5
--text-secondary: #A0A0A0
--border: #333333
```

---

## 🐛 Debugging Tips

### Check console for errors
```bash
# In browser DevTools: Press F12 → Console
```

### Look at React DevTools
```
Install React DevTools extension
Check component props and state
```

### Check element styles
```
Right-click → Inspect
Look at Styles pane
Check CSS being applied
```

### View network requests
```
DevTools → Network tab
Check for failed requests
```

---

## 📈 Performance Tips

1. **Use React DevTools Profiler**
   - Identify slow components
   - Check re-render frequency

2. **Lighthouse Audit**
   - DevTools → Lighthouse
   - Run audit
   - Follow recommendations

3. **Bundle Size**
   - Keep dependencies minimal
   - Use code splitting
   - Tree-shake unused code

---

## 🚢 Deployment

### Build for production
```bash
npm run build
```

### Files to deploy
- `dist/` folder (contains all compiled files)
- That's it!

### Deploy to Netlify
```bash
npm run build
# Drag & drop dist/ folder to Netlify
```

### Deploy to Vercel
```bash
npm run build
# Connect GitHub repo to Vercel
# Vercel auto-deploys on push
```

---

## 📚 Documentation Files

- **README.md** - Project overview
- **QUICKSTART.md** - Setup guide
- **ARCHITECTURE.md** - Design system
- **DEVELOPMENT.md** - Implementation details
- **COMPONENT_GUIDE.md** - How to add components
- **COMPLETION_SUMMARY.md** - What's been built

---

## 🆘 Troubleshooting

### Port already in use?
```bash
# Kill process on port 5174
# Windows:
netstat -ano | findstr :5174
taskkill /PID <PID> /F

# macOS/Linux:
lsof -i :5174
kill -9 <PID>

# Or just use different port:
npm run dev -- --port 3000
```

### Module not found?
```bash
# Check file name (case sensitive on Linux/Mac)
# Check import path
# Verify export in index.js files
```

### Styles not applying?
```bash
# Check CSS Module import: import styles from './Component.module.css'
# Check class name: className={styles.className}
# Clear browser cache: Ctrl+Shift+Delete
```

### Dark mode not working?
```javascript
// Check if ThemeProvider wraps app in main.jsx
<ThemeProvider>
  <App />
</ThemeProvider>

// Check localStorage: localStorage.getItem('theme-mode')
```

---

**Happy coding! 🎉**
