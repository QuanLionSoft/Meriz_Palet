import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: { outDir: 'build' }, // CRA ile aynı klasör: mevcut deploy ayarın bozulmaz
});
