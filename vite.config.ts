import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// base relative : fonctionne aussi bien sur https://<user>.github.io/ que sur
// https://<user>.github.io/<repo>/ (le routage se fait par hash : /#/projets/...).
export default defineConfig({
  base: './',
  plugins: [react()],
});
