# Quick Start Guide - APS Dashboard

## Installation & Running

```bash
# Install dependencies
npm install

# Start development server  
npm run dev

# Open browser at http://localhost:5174
```

## Project Overview

This is a professional B2B SaaS security scanning dashboard that looks and feels like a real enterprise application.

### Key Features Implemented ✅

1. **Complete Folder Structure**
   - Organized by feature (components, pages, layouts, hooks, context, data, styles)
   - Clear separation of concerns
   - Index files for clean imports

2. **Professional Design System**
   - Teal primary accent (#0CC8A8) for all interactive elements
   - Proper severity colors (red, orange, yellow, green)
   - CSS variables for theming
   - Dark & Light mode support

3. **Reusable Components**
   - Button (4 variants × 3 sizes)
   - Badge (status, severity)
   - Card (standard & stat variants)
   - ProgressBar (animated)
   - ScansTable (with vulnerability display)
   - Header (search + actions)
   - Sidebar (navigation + theme toggle)

4. **Full Navigation**
   - 8 routes fully implemented
   - React Router integration
   - Collapsible sidebar
   - Active route highlighting
   - Smooth transitions

5. **Mock Data**
   - 11 realistic scans
   - Vulnerability findings with severity levels
   - Execution logs
   - Project statistics
   - CVSS scores

6. **Animations & Interactions**
   - Skeleton loading states  
   - Slide-up animations (staggered)
   - Shimmer effect on progress bars
   - Smooth hover states
   - Smooth theme switching

7. **Responsive Design**
   - Mobile-first approach
   - Flexible layouts
   - Touch-friendly spacing
   - Works on all screen sizes

## Available Pages

### Dashboard (`/`)
- Vulnerability statistics with trend indicators
- Recent scans table
- Search functionality
- Loading skeletons

### Scans (`/scans`)
- All scans listing
- Clickable rows for details

### Scan Details (`/scans/:id`)
- Complete scan information
- Findings tab with details
- Execution logs tab
- CVSS scores

### Projects (`/projects`)
- Projects management page

### Schedule, Notifications, Settings, Support
- Placeholder pages for expansion

## Customization Tips

### Change Primary Color
Edit [src/constants/colors.js](src/constants/colors.js):
```javascript
primary: '#YOUR_COLOR',
primaryHover: '#YOUR_HOVER_COLOR',
primaryLight: '#YOUR_LIGHT_COLOR',
```

### Add New Page
1. Create component in `src/pages/PageName.jsx`
2. Create styles in `src/pages/PageName.module.css`
3. Add route to `src/App.jsx`
4. Add menu item to `src/data/mockData.js`

### Modify Mock Data
Edit `src/data/mockData.js` to change:
- Scan entries
- Project data
- Menu items
- Scan findings

### Toggle Dark Mode
Click the theme toggle (🌙/☀️) in the sidebar footer

## File Size Breakdown

- Bundle size is optimized with Vite
- CSS is modular and only loaded when needed
- No external font files (uses system fonts)
- Minimal dependencies (React + React Router)

## Browser Testing

The application has been designed to work on:
- ✅ Chrome/Chromium
- ✅ Firefox
- ✅ Safari
- ✅ Edge

## Production Build

```bash
npm run build
npm run preview
```

## Linting

```bash
npm run lint
```

---

**Happy coding! 🚀**
