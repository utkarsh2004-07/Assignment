# 🎨 UI Structure & Layout Guide

Visual reference for the APS Dashboard layout and component structure.

---

## Page Layout Structure

```
┌─────────────────────────────────────────────────────┐
│                      HEADER (sticky)                │
│  ┌──────────┬─────────────────────────────────────┐ │
│  │          │ Page Title                          │ │
│  │          │ Subtitle (optional)     Search... 🔍│ │
│  │ SIDEBAR  │                         [Actions]   │ │
│  │ (sticky) │                                     │ │
│  │          ├─────────────────────────────────────┤ │
│  │ [☰]      │                                     │ │
│  │ 📊 Dash  │                                     │ │
│  │ 📁 Proj  │         MAIN CONTENT                │ │
│  │ 🔍 Scans │         (scrollable)                │ │
│  │ 📅 Sch   │                                     │ │
│  │          │                                     │ │
│  │ ────────│                                     │ │
│  │ 🔔 Notif │                                     │ │
│  │ ⚙️ Set   │                                     │ │
│  │ ❓ Supp  │                                     │ │
│  │ 🌙 Theme │                                     │ │
│  │          ├─────────────────────────────────────┤ │
│  │ ┌──────┐ │ admin@aops.com                      │ │
│  │ │admin │ │ Security Lead                       │ │
│  │ └──────┘ │                                     │ │
│  └──────────┴─────────────────────────────────────┘ │
└─────────────────────────────────────────────────────┘
```

---

## Component Hierarchy

```
App (BrowserRouter)
├── ThemeProvider
│   └── MainLayout
│       ├── Sidebar
│       │   ├── Logo (animations)
│       │   ├── Navigation Items (with active state)
│       │   ├── Bottom Menu
│       │   └── User Profile
│       └── Main Content
│           ├── Header
│           │   ├── Title & Subtitle
│           │   ├── Search Bar
│           │   └── Action Buttons
│           └── Routes
│               ├── Dashboard
│               │   ├── StatCard (×4)
│               │   └── Card
│               │       └── ScansTable
│               │           ├── Header Row
│               │           └── Data Rows
│               ├── Scans
│               │   └── ScansTable
│               ├── ScanDetail
│               │   ├── Overview Card
│               │   └── Tabs
│               │       ├── Findings
│               │       │   └── Finding Items
│               │       └── Logs
│               │           └── Log Entries
│               └── Other Pages
```

---

## Component Composition Examples

### Dashboard Page
```jsx
<Dashboard>
  <Header>
    {/* Title + Subtitle + Actions */}
  </Header>
  <div className="content">
    {/* Stats Grid */}
    <div className="statsGrid">
      <StatCard />
      <StatCard />
      <StatCard />
      <StatCard />
    </div>
    
    {/* Scans Card */}
    <Card>
      <ScansTable>
        <table>
          <thead>
            <tr><th>Name</th><th>Type</th>...</tr>
          </thead>
          <tbody>
            <tr>
              <td><Link>Web App Servers</Link></td>
              <td>Greybox</td>
              <td><StatusBadge /></td>
              <td><ProgressBar /></td>
              <td>
                <SeverityBadge />×4
              </td>
              <td>4d ago</td>
            </tr>
            ...
          </tbody>
        </table>
      </ScansTable>
    </Card>
  </div>
</Dashboard>
```

### Scan Detail Page
```jsx
<ScanDetail>
  <Header>
    {/* Title + Rescan Button */}
  </Header>
  <div className="content">
    {/* Overview Section */}
    <Card>
      <StatusBadge />
      <ProgressBar />
      <div className="vulnBreakdown">
        {/* Severity breakdown */}
      </div>
    </Card>
    
    {/* Tabs */}
    <Card>
      <div className="tabs">
        <Tab>Findings ({count})</Tab>
        <Tab>Execution Log</Tab>
      </div>
      
      {/* Tab Content: Findings */}
      <div className="findings">
        <div className="findingItem">
          <SeverityBadge />
          <h3>Finding Title</h3>
          <p>Description</p>
          <div className="cvssScore">CVSS 9.8</div>
          <StatusBadge status="open" />
        </div>
        ...
      </div>
      
      {/* Tab Content: Logs */}
      <div className="executionLog">
        <div className="logEntry info">
          <span>14:32:15</span>
          <span>Scan started</span>
        </div>
        ...
      </div>
    </Card>
  </div>
</ScanDetail>
```

---

## Sidebar States

### Expanded (280px)
```
┌──────────────────┐
│ [ops]  ops  [←]  │ ← Header
├──────────────────┤
│ 📊 Dashboard     │ ← Nav Items
│ 📁 Projects      │
│ 🔍 Scans         │
│ 📅 Schedule      │
│                  │
│ ─────────────────│
│ 🔔 Notifications │ ← Bottom Items
│ ⚙️ Settings      │
│ ❓ Support       │
│ 🌙 Theme         │
├──────────────────┤
│ ┌──────┐         │ ← User Profile
│ │admin │ admin@  │
│ └──────┘ Security│
│         Lead     │
└──────────────────┘
```

### Collapsed (80px)
```
┌────────┐
│ ops [→]│ ← Expands back
├────────┤
│ 📊     │ ← Icons only
│ 📁     │
│ 🔍     │
│ 📅     │
│        │
│ ──────│
│ 🔔     │
│ ⚙️     │
│ ❓     │
│ 🌙     │
├────────┤
│ admin  │ ← Initials only
└────────┘
```

---

## Color Usage Guide

```
HEADER & MAIN CONTENT AREA
┌─────────────────────────────────────────┐
│ Background: --bg-primary (white/black)  │
│ Text: --text-primary                    │
│ Border: --border                        │
└─────────────────────────────────────────┘

CARDS & PANELS
┌─────────────────────────────────────────┐
│ Background: --bg-primary                │
│ Border: --border (1px)                  │
│ Hover: Shadow + hover effect            │
│ Text: --text-primary / --text-secondary │
└─────────────────────────────────────────┘

STAT CARDS
┌─────────────────────────────────────────┐
│ Label: --text-secondary (uppercase)     │
│ Value: --font-size-4xl (bold)           │
│ Change: Color based on trend            │
│   ↑ Increase: --low (green)             │
│   ↓ Decrease: --critical (red)          │
└─────────────────────────────────────────┘

SEVERITY INDICATORS
┌─────────────────────────────────────────┐
│ Critical: --critical (red #EF4444)      │
│ High: --high (orange #F97316)           │
│ Medium: --medium (amber #FBBF24)        │
│ Low: --low (green #10B981)              │
└─────────────────────────────────────────┘

BUTTONS & INTERACTIVE
┌─────────────────────────────────────────┐
│ Primary: --primary (teal)               │
│ Hover: --primary-hover (darker teal)    │
│ Active: Shadow + transform              │
│ Disabled: Opacity 0.5                   │
└─────────────────────────────────────────┘

STATUS BADGES
┌─────────────────────────────────────────┐
│ Completed: Green background             │
│ Scheduled: Blue background              │
│ Failed: Red background                  │
│ In Progress: Blue background            │
└─────────────────────────────────────────┘
```

---

## Spacing Example

```
Card Component
─────────────────────────────
│ --space-6 padding          │
│  ┬─────────────────────────┬
│                             
│  Title                      
│  --space-1 gap              
│  Subtitle                   
│  ┴─────────────────────────┴
│                             
│  Content with --space-4     
│  spacing between elements   
│                             
│ --space-6 padding           │
─────────────────────────────
```

---

## Animation Timings

```
--transition-fast: 150ms   (hover states, tooltips)
--transition-base: 200ms   (theme switch, basic transitions)
--transition-slow: 300ms   (page transitions)

Examples:
- Button hover: 150ms
- Theme change: 200ms
- Card slide-in: 300-500ms (with delay)
- Skeleton shimmer: 1.5s infinite
```

---

## Responsive Breakpoints

```
Mobile (< 768px)
┌────────────────┐
│  Header ^      │ Fullwidth
├────────────────┤
│ CONTENT ONLY   │ Sidebar hidden/off-screen
│ (full width)   │ Hamburger menu toggle
│                │
│                │
└────────────────┘

Tablet (768px - 1024px)
┌──────┬─────────┐
│ Side │ Header  │
│ bar  │ & Cont. │
│ ────┼────────  │
│ nav │ Scans   │ Sidebar smaller
│     │ table   │ Two columns
│     │ (fits)  │
│     │         │
└─────┴─────────┘

Desktop (> 1024px)
┌──────┬──────────────────┐
│      │     Header       │ Full sidebar (280px)
│ Side │ Search | Actions │ Four-column grid
│ bar  ├──────────────────┤ Comfortable spacing
│      │  4 Stat Cards    │ Full table visible
│ nav  │  (grid layout)   │
│      ├──────────────────┤
│      │  Scans Table     │
│      │  (full width)    │
│      │                  │
└──────┴──────────────────┘
```

---

## Component Variations

### Button Variants
```
Primary Button
┌──────────────┐
│ New Scan →   │ Teal bg, white text, shadow
└──────────────┘

Secondary Button
┌──────────────┐
│ Filter ⚙️    │ Light bg, dark text, border
└──────────────┘

Ghost Button
┌──────────────┐
│ Rescan       │ Transparent, text only
└──────────────┘
```

### Badge Variations
```
Status Badges
┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐
│Completed │ │Scheduled │ │Failed    │ │In Progress
│(green)   │ │(blue)    │ │(red)     │ │(blue)
└──────────┘ └──────────┘ └──────────┘ └──────────┘

Severity Dots
● Critical  ● High  ● Medium  ● Low
```

### Card Variations
```
Standard Card:
┌─────────────────┐
│  Card Content   │
│  Normal padding │
│  Hover shadow   │
└─────────────────┘

Stat Card:
┌─────────────────┐
│ CRITICAL        │ Uppercase label
│ 86              │ Large number
│ +25 (+25.0%)    │ Trend indicator
│ ↑               │
└─────────────────┘
```

---

## Table Structure

```
┌──────────────────────────────────────────────────┐
│ HEADER ROW (dark background)                     │
├──────┬──────┬──────┬──────┬──────┬──────┬──────┤
│Scan  │Type  │Status│Prog. │Vulns │Last  │      │
│Name  │      │      │      │      │Scan  │      │
├──────┼──────┼──────┼──────┼──────┼──────┼──────┤
│Web   │Grey- │●     │[────]│ 5 3 │4d    │      │
│App   │box   │Comp  │100%  │ 2 1 │ago   │      │
│Serv  │      │      │      │     │      │      │
├──────┼──────┼──────┼──────┼──────┼──────┼──────┤
│Web   │Grey- │●     │[────]│ 5 3 │4d    │      │
│App   │box   │Comp  │100%  │ 2 1 │ago   │      │
│Serv  │      │      │      │     │      │      │
├──────┼──────┼──────┼──────┼──────┼──────┼──────┤
│IoT   │Black │●     │[─    ]│ 2 4 │3d    │      │
│Devs  │box   │Failed│10%   │ 1 1 │ago   │      │
└──────┴──────┴──────┴──────┴──────┴──────┴──────┘

Legend:
● = Status Badge (Completed/Failed/Scheduled)
[────] = Progress Bar (animated)
5 3 2 1 = Severity badges with count
```

---

## Dark Mode Example

### Light Mode
```
Background: #FFFFFF
Text: #1F2937 (dark)
Cards: White with light gray borders
Buttons: Teal (#0CC8A8)
```

### Dark Mode
```
Background: #0F0F0F
Text: #E5E5E5 (light)
Cards: Dark gray (#1A1A1A) with darker borders
Buttons: Same teal (#0CC8A8) - accent stays same
Hover states: Lighter backgrounds (#252525)
```

**Both modes use same accent colors!**

---

**This visual guide helps understand the APS Dashboard layout and structure. 🎨**
