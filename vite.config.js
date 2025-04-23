import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // base: './dist', // optional, useful kung static deployment like Vercel or GitHub Pages\
  plugins: [
    tailwindcss()
  ],
  server:{
    port:"8888",
    host: '0.0.0.0'
  }
});

 