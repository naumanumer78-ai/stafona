import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        midnight: {
          DEFAULT: 'var(--midnight)',
          '98': 'var(--midnight-98)',
          '95': 'var(--midnight-95)',
          '90': 'var(--midnight-90)',
          '80': 'var(--midnight-80)',
          '70': 'var(--midnight-70)',
          '60': 'var(--midnight-60)',
          '50': 'var(--midnight-50)',
          '40': 'var(--midnight-40)',
          '30': 'var(--midnight-30)',
          '20': 'var(--midnight-20)',
          '10': 'var(--midnight-10)',
          '5': 'var(--midnight-5)',
        },
        'bright-purple': 'var(--bright-purple)',
        'bright-cerise': 'var(--bright-cerise)',
        'bright-yellow': 'var(--bright-yellow)',
        'bright-green': 'var(--bright-green)',
        'mid-purple': 'var(--mid-purple)',
        'mid-cerise': 'var(--mid-cerise)',
        'mid-orange': 'var(--mid-orange)',
        'mid-green': 'var(--mid-green)',
        'dark-purple': 'var(--dark-purple)',
        'dark-cerise': 'var(--dark-cerise)',
        'dark-orange': 'var(--dark-orange)',
        'dark-green': 'var(--dark-green)',
      },
      fontFamily: {
        sans: ['Next Pan Book', 'Arial', 'sans-serif']
      },
      maxWidth: {
        content: '1200px'
      }
    }
  },
  plugins: []
}
export default config
