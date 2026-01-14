/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        gold: '#C9A875',
        ivory: '#F7F3EC',
      },
      fontFamily: {
        cairo: ['Cairo', 'sans-serif'],
      },
      borderRadius: {
        'none': '0',
        'sm': '0.125rem',
        'DEFAULT': '0.25rem',
        'md': '0.375rem',
        'lg': '0.5rem',
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
        'full': '9999px',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
        'rtl': {'raw': 'dir: rtl'},
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [],
};