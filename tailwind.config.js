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
          hover: 'oklch(0.68 0.12 220)',
        },
        bg: {
          primary: 'var(--background)',
          secondary: 'var(--muted)',
        },
        text: {
          main: 'var(--foreground)',
          secondary: 'var(--muted-foreground)',
          muted: 'oklch(0.58 0.035 250)',
        },
        'border-color': 'var(--border)',
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
