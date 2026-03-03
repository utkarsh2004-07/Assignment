// Mock data for scans
export const mockScans = [
  {
    id: 1,
    name: 'Web App Servers',
    type: 'Greybox',
    status: 'Completed',
    progress: 100,
    vulnerability: {
      critical: 5,
      high: 3,
      medium: 2,
      low: 1,
    },
    lastScan: '4d ago',
    timestamp: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000),
  },
  {
    id: 2,
    name: 'Web App Servers',
    type: 'Greybox',
    status: 'Completed',
    progress: 100,
    vulnerability: {
      critical: 5,
      high: 3,
      medium: 2,
      low: 1,
    },
    lastScan: '4d ago',
    timestamp: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000),
  },
  {
    id: 3,
    name: 'Web App Servers',
    type: 'Greybox',
    status: 'Completed',
    progress: 100,
    vulnerability: {
      critical: 5,
      high: 3,
      medium: 2,
      low: 1,
    },
    lastScan: '4d ago',
    timestamp: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000),
  },
  {
    id: 4,
    name: 'Web App Servers',
    type: 'Greybox',
    status: 'Completed',
    progress: 100,
    vulnerability: {
      critical: 5,
      high: 3,
      medium: 2,
      low: 1,
    },
    lastScan: '4d ago',
    timestamp: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000),
  },
  {
    id: 5,
    name: 'Web App Servers',
    type: 'Greybox',
    status: 'Completed',
    progress: 100,
    vulnerability: {
      critical: 5,
      high: 3,
      medium: 2,
      low: 1,
    },
    lastScan: '4d ago',
    timestamp: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000),
  },
  {
    id: 6,
    name: 'Web App Servers',
    type: 'Greybox',
    status: 'Completed',
    progress: 100,
    vulnerability: {
      critical: 5,
      high: 3,
      medium: 2,
      low: 1,
    },
    lastScan: '4d ago',
    timestamp: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000),
  },
  {
    id: 7,
    name: 'Web App Servers',
    type: 'Greybox',
    status: 'Completed',
    progress: 100,
    vulnerability: {
      critical: 5,
      high: 3,
      medium: 2,
      low: 1,
    },
    lastScan: '4d ago',
    timestamp: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000),
  },
  {
    id: 8,
    name: 'Web App Servers',
    type: 'Greybox',
    status: 'Scheduled',
    progress: 100,
    vulnerability: {
      critical: 5,
      high: 3,
      medium: 0,
      low: 0,
    },
    lastScan: '4d ago',
    timestamp: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000),
  },
  {
    id: 9,
    name: 'Web App Servers',
    type: 'Greybox',
    status: 'Scheduled',
    progress: 100,
    vulnerability: {
      critical: 5,
      high: 3,
      medium: 0,
      low: 0,
    },
    lastScan: '4d ago',
    timestamp: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000),
  },
  {
    id: 10,
    name: 'IoT Devices',
    type: 'Blackbox',
    status: 'Failed',
    progress: 10,
    vulnerability: {
      critical: 2,
      high: 4,
      medium: 1,
      low: 1,
    },
    lastScan: '3d ago',
    timestamp: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
  },
  {
    id: 11,
    name: 'Temp Data',
    type: 'Blackbox',
    status: 'Failed',
    progress: 10,
    vulnerability: {
      critical: 2,
      high: 4,
      medium: 1,
      low: 1,
    },
    lastScan: '3d ago',
    timestamp: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
  },
];

// Project overview data
export const mockProjectData = {
  name: 'Project X',
  owner: 'Nammargirl',
  totalScore: 100,
  scheduled: 1000,
  rescans: 100,
  failedScore: 100,
  criticalVulnerabilities: {
    count: 86,
    change: '+25',
    changePercent: '+25.0%',
    trend: 'increase',
  },
  highVulnerabilities: {
    count: 16,
    change: '+0.9%',
    changePercent: '+0.9%',
    trend: 'increase',
  },
  mediumVulnerabilities: {
    count: 26,
    change: '-0.9%',
    changePercent: '-0.9%',
    trend: 'decrease',
  },
  lowVulnerabilities: {
    count: 16,
    change: '+0.8%',
    changePercent: '+0.8%',
    trend: 'increase',
  },
};

// Sidebar menu items
export const menuItems = [
  { id: 'dashboard', label: 'Dashboard', icon: '📊', path: '/' },
  { id: 'projects', label: 'Projects', icon: '📁', path: '/projects' },
  { id: 'scans', label: 'Scans', icon: '🔍', path: '/scans' },
  { id: 'schedule', label: 'Schedule', icon: '📅', path: '/schedule' },
];

export const bottomMenuItems = [
  { id: 'notifications', label: 'Notifications', icon: '🔔', path: '/notifications' },
  { id: 'settings', label: 'Settings', icon: '⚙️', path: '/settings' },
  { id: 'support', label: 'Support', icon: '❓', path: '/support' },
];

// Scan details for detail page
export const getScanDetails = (scanId) => {
  const scan = mockScans.find((s) => s.id === parseInt(scanId));
  if (!scan) return null;

  return {
    ...scan,
    findings: [
      {
        id: 1,
        title: 'SQL Injection vulnerability found',
        severity: 'critical',
        description: 'An SQL injection vulnerability was detected in the login form.',
        cvss: '9.8',
        status: 'Open',
        lastUpdated: '2d ago',
      },
      {
        id: 2,
        title: 'Cross-Site Scripting (XSS)',
        severity: 'high',
        description: 'Stored XSS vulnerability in user comment section.',
        cvss: '7.5',
        status: 'Open',
        lastUpdated: '4d ago',
      },
      {
        id: 3,
        title: 'Insecure Direct Object References',
        severity: 'high',
        description: 'Users can access other users\' data through API endpoint manipulation.',
        cvss: '7.1',
        status: 'In Progress',
        lastUpdated: '1d ago',
      },
      {
        id: 4,
        title: 'Weak Password Policy',
        severity: 'medium',
        description: 'Password requirements are not enforced on registration.',
        cvss: '5.4',
        status: 'Open',
        lastUpdated: '3d ago',
      },
    ],
    executionLog: [
      { timestamp: '2024-02-27T14:32:15Z', message: 'Scan started', status: 'info' },
      { timestamp: '2024-02-27T14:33:42Z', message: 'Discovering endpoints', status: 'info' },
      { timestamp: '2024-02-27T14:38:21Z', message: 'Testing authentication', status: 'info' },
      { timestamp: '2024-02-27T14:45:18Z', message: 'Scanning for SQL injection', status: 'info' },
      { timestamp: '2024-02-27T14:52:33Z', message: 'XSS vulnerability detected', status: 'warning' },
      { timestamp: '2024-02-27T15:10:21Z', message: 'Scan completed', status: 'success' },
    ],
  };
};
