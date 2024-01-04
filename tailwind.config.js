/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      keyframes:{
        'flip':{
          '0%':{transform: 'rotateX(0)'},
          '45%':{transform: 'rotateX(90deg)'},
          '55%':{transform: 'rotateX(90deg)'},
          '100%':{transform: 'rotateX(0)'}
        },
      },
    },
  },
  plugins: [],
}

