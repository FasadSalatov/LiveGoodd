import react from '@vitejs/plugin-react';
import * as path from 'path';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: [ { find: '@', replacement: path.resolve( __dirname, 'src' ) } ],
  },
  server: {
    port: 3000,
  },
  css: {
    modules: {
      localsConvention: 'camelCaseOnly',
    }
  }
});
