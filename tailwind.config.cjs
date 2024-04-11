/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    darkMode: "class",
    theme: {
      colors: {
        'primary': "#ffffff",
        black: "#000000",
        secondary: "#0e1d34", 
        fourth: "#003d70" ,      
        background: "#263755", 
        amarillo: "#f6a500",
        azul: "#1d3585",
        rojo: "#d53b00", 
        third: "#ae1016",            
        red: "red",
        green: "green",        
        transparent: 'transparent',
        current: 'currentColor',        
        'white': '#ffffff',
        'purple': '#3f3cbb',
        'midnight': '#121063',
        'metal': '#565584',
        'tahiti': '#3ab7bf',
        'silver': '#ecebff',
        'bubble-gum': '#ff77e9',
        'bermuda': '#78dcca',
      },
      screens: {
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      },
      extend: {
        fontFamily: {
          sans: ["InterVariable", "Inter", ...defaultTheme.fontFamily.sans],
        },
      },
    },
    plugins: [],
  };