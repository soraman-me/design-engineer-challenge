import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/app/**/*.{ts,tsx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        midnight: '#0C0A1D',
        smokey: '#8682B1',
        lavender: '#8682B1',
        clay: '#36344B',
        steel: '#1F1D2F',
      },
      backgroundImage: {
        'gradient-funky': 'linear-gradient(90deg, #FF00A8 0%, #00E0FF 100%)',
        royal: 'background: linear-gradient(180deg, #6F4CFF 0%, #432E99 100%)',
      },
    },
  },
}
export default config
