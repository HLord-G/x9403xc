import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  base: './', // optional, useful kung static deployment like Vercel or GitHub Pages\
  plugins: [
    tailwindcss()
  ]
});

 