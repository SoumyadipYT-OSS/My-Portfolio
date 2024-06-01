import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// add the beginning of your app entry

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/My-Portfolio/',
  build: {
    rollupOptions: {
      external: ['react-intersection-observer', 'framer-motion'],
      manifest: true,
    },
  },
});
