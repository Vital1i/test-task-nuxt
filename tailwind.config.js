/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,vue}',
    './components/**/*.{js,ts,vue}',
    './layouts/**/*.{js,ts,vue}',
    './pages/**/*.{js,ts,vue}',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}'
  ],
  theme: {
    fontFamily: {
      inter: ['Inter', 'system-ui', 'ui-sans-serif', 'sans-serif']
    },
    screens: {
      sm: '600px',
      md: '905px',
      lg: '1024px',
      xl: '1240px',
      '2xl': '1440px'
    },
    extend: {
      colors: {
        brand: {
          50: '#e9f0ff',
          100: '#cfdcfa',
          500: '#3552c9',
          600: '#1c3aa8',
          700: '#153074'
        },
        surface: '#f7f8fb',
        card: '#ffffff',
        muted: '#6b7280',
        border: '#e5e7eb',
        success: '#22c55e',
        warning: '#f59e0b',
        danger: '#ef4444'
      },
      boxShadow: {
        card: '0 6px 18px rgba(16, 24, 40, 0.06)'
      },
      borderRadius: {
        xl: '18px'
      }
    }
  },
  plugins: []
}

