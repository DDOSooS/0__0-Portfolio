import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './data/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        bg:        '#0C0C0C',
        surface:   '#141414',
        border:    '#1F1F1F',
        muted:     '#2A2A2A',
        subtle:    '#6B6B6B',
        secondary: '#A8A8A8',
        primary:   '#E8E8E8',
        white:     '#F5F5F5',
        accent:    '#00C2A8',
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
    },
  },
  plugins: [],
}

export default config
