import { defineConfig } from 'vite';


export default defineConfig({
  root: './src',
  base: '/forgotten-waters-pirate-sheet/',
  publicDir: 'themes',
  build: {
    outDir: '../dist',
    emptyOutDir: true
  }
});
