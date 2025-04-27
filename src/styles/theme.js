export const theme = {
  colors: {
    primary: '#2563EB', // Modern blue
    secondary: '#7C3AED', // Vibrant purple
    accent: '#10B981', // Emerald green
    background: {
      dark: '#0F172A', // Dark blue-gray
      light: '#F8FAFC', // Light gray
    },
    text: {
      primary: '#F8FAFC',
      secondary: '#94A3B8',
      dark: '#1E293B',
    },
    gradient: {
      primary: 'linear-gradient(135deg, #2563EB 0%, #7C3AED 100%)',
      secondary: 'linear-gradient(135deg, #10B981 0%, #3B82F6 100%)',
    }
  },
  typography: {
    fontFamily: {
      primary: "'Inter', sans-serif",
      secondary: "'Space Grotesk', sans-serif",
    },
    fontSize: {
      h1: '3.5rem',
      h2: '2.5rem',
      h3: '2rem',
      body: '1rem',
      small: '0.875rem',
    },
    fontWeight: {
      light: 300,
      regular: 400,
      medium: 500,
      bold: 700,
    }
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    xxl: '3rem',
  },
  borderRadius: {
    sm: '0.25rem',
    md: '0.5rem',
    lg: '1rem',
    full: '9999px',
  },
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
  },
  transitions: {
    default: 'all 0.3s ease',
    fast: 'all 0.15s ease',
    slow: 'all 0.5s ease',
  }
}; 