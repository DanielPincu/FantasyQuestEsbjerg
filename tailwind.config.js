import { defineConfig } from 'vite';
import plugin from 'tw-elements/plugin.cjs';

export default defineConfig({
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./src/**/*.{html,js}",
    "./node_modules/tw-elements/js/**/*.js"
  ],
  theme: {
    extend: {
      fontSize: {
        '2xl': '1.125rem',  
        '3xl': '1.5rem', 
      },
      colors: {
        yellow: {
          '500': '#F0CE00',
        },
        orange: {
          '500': '#F3951A',
        },
      },
    },
  },
  plugins: [
    plugin
  ],
  darkMode: "class"
});
