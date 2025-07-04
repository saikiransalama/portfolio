/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Light mode
        background: '#F8FAFC',
        foreground: '#1A202C',
        muted: '#475569',
        card: '#FFFFFF',
        border: '#E5E7EB',
        accent: '#6366F1', // indigo
        accent2: '#06B6D4', // cyan
        // Dark mode
        dark: {
          background: '#0F172A',
          foreground: '#F1F5F9',
          muted: '#94A3B8',
          card: '#1E293B',
          border: '#334155',
          accent: '#818CF8', // soft indigo
          accent2: '#22D3EE', // cyan
        },
      },
    },
  },
  plugins: [],
};
