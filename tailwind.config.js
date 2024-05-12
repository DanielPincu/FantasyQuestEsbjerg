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
    extend: {}
  },
  plugins: [
    plugin
  ],
  darkMode: "class"
});
