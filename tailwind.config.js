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
          50: '#fdf4ff',
          100: '#fae8ff',
          200: '#f5d0fe',
          300: '#f0abfc',
          400: '#e879f9',
          500: '#c069ff',
          600: '#a855f7',
          700: '#7e22ce',
        },
        infra: {
          DEFAULT: 'var(--blue)',
          light: 'var(--blue-light)',
          dark: '#7e22ce',
        },
        telemetry: {
          DEFAULT: 'var(--cyan)',
          light: 'var(--cyan-light)',
          dark: '#be185d',
        },
        violet: {
          DEFAULT: 'var(--violet)',
          light: 'var(--violet-light)',
          dark: '#581c87',
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      boxShadow: {
        'glow-brand': '0 0 45px -8px rgba(192, 105, 255, 0.45)',
        'glow-pink': '0 0 45px -10px rgba(236, 72, 153, 0.40)',
        'glow-blue': '0 0 45px -10px rgba(192, 105, 255, 0.35)',
        'glow-cyan': '0 0 45px -10px rgba(232, 121, 249, 0.35)',
        'glow-violet': '0 0 45px -10px rgba(168, 85, 247, 0.40)',
      },
    },
  },
  plugins: [],
}
