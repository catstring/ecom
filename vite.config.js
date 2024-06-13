import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import { loadEnv } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import tsconfigPaths from 'vite-tsconfig-paths';

// export default defineConfig({
//   base: '/ecom/',
//   plugins: [
//     react(),  // Setup React with fast refresh
//     reactRefresh(),
//     tsconfigPaths()  // Automatically resolves TypeScript path mappings
//   ]
// });
export default defineConfig({
  base: '/ecom/',
  server: {
    proxy: {
      "/ecom-api": {
        target: "http://127.0.0.1:8000",
        changeOrigin: true,
      },
    },
  },
  plugins: [react(),reactRefresh(), tsconfigPaths()],
  
})