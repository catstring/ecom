import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import { loadEnv } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [
    react(),  // Setup React with fast refresh
    reactRefresh(),
    tsconfigPaths()  // Automatically resolves TypeScript path mappings
  ]
});