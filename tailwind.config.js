/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'var(--primary)',
          foreground: 'var(--primary-foreground)',
        },
        accent: {
          DEFAULT: 'var(--accent)',
          foreground: 'var(--accent-foreground)',
          hover: 'var(--accent-hover)',
          secondary: 'var(--accent-secondary)',
        },
        bg: {
          primary: 'var(--background)',
          secondary: 'var(--muted)',
          surface: 'var(--surface)',
        },
        text: {
          main: 'var(--foreground)',
          secondary: 'var(--muted-foreground)',
          muted: 'var(--text-muted)',
        },
        success: 'var(--success)',
        'border-color': 'var(--border)',
        premium: {
          bg: '#0B1020',
          surface: '#131A2A',
          blue: '#3B82F6',
          cyan: '#06B6D4',
          success: '#10B981',
          text: '#F8FAFC',
          muted: '#94A3B8',
        },
      },
      boxShadow: {
        'card-elevated':
          '0 15px 40px rgba(0,0,0,0.15), 0 5px 15px rgba(0,0,0,0.08)',
        'card-glow': '0 0 0 1px rgba(59,130,246,0.15), 0 15px 40px rgba(0,0,0,0.2)',
        'btn-glow': '0 0 24px rgba(59,130,246,0.35)',
      },
      transitionDuration: {
        premium: '300ms',
      },
      fontFamily: {
        sans: ['DM Sans', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Cormorant Garamond', 'Source Serif Pro', 'Georgia', 'serif'],
        heading: ['Cormorant Garamond', 'Source Serif Pro', 'Georgia', 'serif'],
        body: ['DM Sans', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['Fira Code', 'JetBrains Mono', 'Cascadia Code', 'monospace'],
        code: ['Fira Code', 'JetBrains Mono', 'Cascadia Code', 'monospace'],
      },
      borderRadius: {
        'design': '12px',
      },
    },
  },
  plugins: [],
};
