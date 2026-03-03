# APS - Advanced Penetration Scanner Dashboard

A professional B2B SaaS security scanning dashboard built with React, Vite, and React Router. Features real-time vulnerability assessment visualization, dark/light mode support, and a fully responsive design.

## 📁 Project Structure

```
src/
├── components/              # Reusable components
│   ├── ui/                 # Base UI components
│   │   ├── Button.jsx      # Buttons with variants
│   │   ├── Badge.jsx       # Status and severity badges
│   │   ├── Card.jsx        # Card and stat card components
│   │   └── ProgressBar.jsx # Animated progress bars
│   ├── Header.jsx          # Page header with search
│   ├── Sidebar.jsx         # Navigation sidebar
│   ├── ScansTable.jsx      # Scans data table
│   └── index.js            # Component exports
├── pages/                  # Page components
│   ├── Dashboard.jsx       # Main dashboard with stats
│   ├── Projects.jsx        # Projects page
│   ├── Scans.jsx          # Scans listing page
│   ├── ScanDetail.jsx     # Scan details with findings
│   ├── Schedule.jsx        # Scheduled scans
│   ├── Notifications.jsx  # Notification settings
│   ├── Settings.jsx       # Application settings
│   ├── Support.jsx        # Support page
│   └── index.js           # Page exports
├── layouts/               # Layout components
│   ├── MainLayout.jsx     # Main layout with sidebar
│   └── MainLayout.module.css
├── context/               # React context providers
│   └── ThemeContext.jsx   # Dark/light mode context
├── hooks/                 # Custom React hooks
│   └── useTheme.js        # Theme hook
├── data/                  # Mock data
│   └── mockData.js        # Application data
├── constants/             # Application constants
│   └── colors.js          # Color palette & utilities
├── styles/                # Global styles
│   └── globals.css        # CSS variables & resets
├── utils/                 # Utility functions
└── App.jsx                # Main app component
```

## 🎨 Design System

### Colors
- **Primary Accent**: Teal (#0CC8A8) - Used for active states, CTAs, links
- **Severity Colors**:
  - Critical: Red (#EF4444)
  - High: Orange (#F97316)
  - Medium: Amber (#FBBF24)
  - Low: Green (#10B981)
- **Dark Mode**: Near-black backgrounds (#0F0F0F - #1A1A1A)
- **Light Mode**: White to light gray (#FFFFFF - #F5F5F5)

### Typography
- **Font Family**: System UI fonts (-apple-system, Segoe UI, Inter)
- **Font Weights**: Normal (400), Medium (500), Semibold (600), Bold (700)
- **Responsive Sizes**: 12px (xs) to 32px (4xl)

### Spacing System
Uses a consistent 4px base unit:
- `--space-1`: 4px
- `--space-2`: 8px
- `--space-3`: 12px
- `--space-4`: 16px
- `--space-5`: 20px
- `--space-6`: 24px
- `--space-8`: 32px
- `--space-10`: 40px

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ 
- npm 7+

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm npm run preview

# Run linter
npm run lint
```

## 🌓 Dark/Light Mode

The application supports both dark and light modes with smooth transitions. Theme can be toggled using the theme button in the sidebar footer.

- Stores preference in localStorage as `theme-mode`
- Respects system preference on first load
- Instantly applies across all components
- No inverted colors - proper surface adjustments per mode

## 📊 Features

### Dashboard
- Real-time vulnerability statistics
- Severity breakdown cards with trend indicators
- Recent scans table with clickable rows
- Search and filter scan results
- Skeleton loading states
- Smooth animations

### Scan Details
- Detailed scan information
- Vulnerability findings with severity badges
- CVSS score display
- Execution logs with status indicators
- Tabbed interface (Findings / Logs)
- Back navigation

### Navigation
- Collapsible sidebar with icon labels
- Active route highlighting
- 8 main navigation items
- Theme toggle in sidebar footer
- User info profile section

## 🎭 Component Library

All components support CSS Modules for scoped styling:

### UI Components
- **Button**: Variants (primary, secondary, ghost, danger) & sizes (sm, md, lg)
- **Badge**: Status and severity badges with multiple variants
- **Card**: Standard and stat card variants
- **ProgressBar**: Animated progress with multiple sizes

### Compound Components
- **Header**: Search bar + action buttons
- **Sidebar**: Navigation + theme toggle + user section
- **ScansTable**: Sortable table with vulnerability indicators

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints: 768px (tablet), 1024px (desktop)
- Flexible grid systems
- Touch-friendly spacing
- Sidebar collapses on mobile

## 🔄 Data Management

All data is mocked using JSON in [src/data/mockData.js](src/data/mockData.js):
- 11 sample scans with realistic data
- Project overview statistics
- Menu items and navigation data
- Detailed scan findings
- Execution logs

## 🎨 Animations & Transitions

- Slide-in animations for cards (staggered delays)
- Loading skeleton shimmer effect
- Smooth hover states on interactive elements
- Page transitions
- Smooth theme switching
- Progress bar animation

## 🏗️ File Naming Conventions

- Components: PascalCase (e.g., `Dashboard.jsx`)
- Styles: kebab-case (e.g., `Header.module.css`)
- Utilities/Hooks: camelCase (e.g., `useTheme.js`)
- Data files: camelCase (e.g., `mockData.js`)

## 🔧 Configuration

- **Vite** for fast development & optimized builds
- **React Router DOM** for client-side routing
- **CSS Modules** for component styling
- **ESLint** for code quality

## 📖 Available Routes

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | Dashboard | Main dashboard with stats |
| `/projects` | Projects | Projects management |
| `/scans` | Scans | All scans listing |
| `/scans/:id` | ScanDetail | Detailed scan view |
| `/schedule` | Schedule | Scheduled scans |
| `/notifications` | Notifications | Notification settings |
| `/settings` | Settings | App settings |
| `/support` | Support | Support page |

## 🎯 Browser Support

Modern browsers with ES6 support:
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 📝 License

MIT License - Feel free to use this project for personal and commercial purposes.

---

**Version**: 1.0.0  
**Last Updated**: March 3, 2026
