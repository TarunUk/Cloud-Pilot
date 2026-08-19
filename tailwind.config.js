/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        'muted-text': 'var(--muted-text)',
        surface: {
          DEFAULT: 'var(--surface)',
          secondary: 'var(--surface-secondary)',
          card: 'var(--surface-card)',
        },
        border: {
          DEFAULT: 'var(--border)',
          subtle: 'var(--border-subtle)',
          highlight: 'var(--border-highlight)',
        },
        bg: {
          hero: 'var(--bg-hero)',
          product: 'var(--bg-product)',
          deploy: 'var(--bg-deploy)',
          monitor: 'var(--bg-monitor)',
          'how-it-works': 'var(--bg-how-it-works)',
          cta: 'var(--bg-cta)',
          footer: 'var(--bg-footer)',
        },
        brand: {
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
          700: '#047857',
        },
        infra: {
          DEFAULT: 'var(--blue)',
          light: 'var(--blue-light)',
          dark: '#1d4ed8',
        },
        telemetry: {
          DEFAULT: 'var(--cyan)',
          light: 'var(--cyan-light)',
          dark: '#0e7490',
        },
        violet: {
          DEFAULT: 'var(--violet)',
          light: 'var(--violet-light)',
          dark: '#6d28d9',
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      boxShadow: {
        'glow-brand': '0 0 40px -8px rgba(16, 185, 129, 0.32)',
        'glow-blue': '0 0 45px -10px rgba(59, 130, 246, 0.30)',
        'glow-cyan': '0 0 45px -10px rgba(6, 182, 212, 0.30)',
        'glow-violet': '0 0 45px -10px rgba(139, 92, 246, 0.30)',
      },
    },
  },
  plugins: [],
}
