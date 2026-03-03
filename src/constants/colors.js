// Color palette
export const colors = {
  // Primary accent
  primary: '#0CC8A8',
  primaryHover: '#0AB295',
  primaryLight: '#E8F8F5',

  // Severity colors
  critical: '#EF4444', // Red
  high: '#F97316', // Orange
  medium: '#FBBF24', // Amber/Yellow
  lowSuccess: '#10B981', // Green

  // Dark mode
  darkBg: '#0F0F0F',
  darkBgSecondary: '#1A1A1A',
  darkBgTertiary: '#252525',
  darkText: '#E5E5E5',
  darkTextSecondary: '#A0A0A0',
  darkBorder: '#333333',
  darkSurface: '#1F1F1F',

  // Light mode
  lightBg: '#FFFFFF',
  lightBgSecondary: '#F5F5F5',
  lightBgTertiary: '#EEEEEE',
  lightText: '#1F2937',
  lightTextSecondary: '#6B7280',
  lightBorder: '#E5E7EB',
  lightShadow: 'rgba(0, 0, 0, 0.1)',

  // Status colors
  success: '#10B981',
  warning: '#F59E0B',
  error: '#EF4444',
  info: '#3B82F6',

  // Additional
  white: '#FFFFFF',
  black: '#000000',
  transparent: 'transparent',
};

export const getSeverityColor = (severity) => {
  switch (severity.toLowerCase()) {
    case 'critical':
      return colors.critical;
    case 'high':
      return colors.high;
    case 'medium':
      return colors.medium;
    case 'low':
      return colors.lowSuccess;
    default:
      return colors.lightTextSecondary;
  }
};
