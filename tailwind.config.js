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
      inter: ['Inter', 'system-ui', 'ui-sans-serif', 'sans-serif'],
      jakarta: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'ui-sans-serif', 'sans-serif'],
      montserrat: ['Montserrat', 'Inter', 'system-ui', 'ui-sans-serif', 'sans-serif']
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
          200: '#eef4ff',
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
        danger: '#ef4444',
        sidebar: {
          bg: '#F3F4F6',
          border: '#E5E7EB'
        },
        text: {
          primary: '#1B1B21',
          secondary: '#45464F',
          muted: '#5B5C64'
        },
        filter: {
          border: '#767680',
          active: {
            bg: '#CFE5F8',
            hover: '#b8d9f5',
            indicator: '#2F63C8'
          },
          hover: '#eef4ff'
        },
        pill: {
          bg: '#F5F2FA',
          hover: '#E7E3F4'
        },
        table: {
          bg: '#F5F5F7',
          border: '#C6C5D0'
        },
        account: {
          icon: '#E9E7EF',
          avatar: '#1C40BE'
        },
        header: {
          bg: '#1B243D',
          logo: '#477BFF'
        }
      },
      fontSize: {
        'xs': ['10px', { lineHeight: '12px', letterSpacing: '0.05em' }],
        'sm': ['12px', { lineHeight: '16px', letterSpacing: '0.15px' }],
        'base': ['14px', { lineHeight: '20px', letterSpacing: '0.1px' }],
        'base-tall': ['14px', { lineHeight: '28px', letterSpacing: '0.1px' }],
        'md': ['16px', { lineHeight: '24px', letterSpacing: '0' }],
        'lg': ['18px', { lineHeight: '24px', letterSpacing: '0' }],
        'xl': ['22px', { lineHeight: '28px', letterSpacing: '0' }],
        '2xl': ['24px', { lineHeight: '32px', letterSpacing: '0' }]
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

