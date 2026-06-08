/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#0a1628',
        'navy-2': '#0d1f3c',
        blue: '#1a73e8',
        'blue-light': '#4a9eff',
        'sf-blue': '#00A1E0',
        'text-2': '#4b5563',
        'text-3': '#6b7280',
        border: '#e5e7eb',
        bg: '#f8f9fc',
        'bg-2': '#f1f4f9',
        teal: '#14b8a6',
        purple: '#8b5cf6',
        orange: '#f59e0b',
        green: '#22c55e',
        text: '#0f1729',
        bg2: '#f1f4f9',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        card: '0 4px 16px rgba(0,0,0,.08)',
        'card-lg': '0 8px 32px rgba(0,0,0,.12)',
        'card-xl': '0 20px 60px rgba(0,0,0,.15)',
        chat: '0 8px 32px rgba(0,0,0,.18)',
        'chat-btn': '0 4px 20px rgba(26,115,232,.45)',
      },
      borderRadius: {
        card: '10px',
        'card-lg': '16px',
      },
    },
  },
  plugins: [],
}
