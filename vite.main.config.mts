import { defineConfig } from 'vite'
import path from 'path'

// https://vitejs.dev/config
export default defineConfig({
  build: {
    sourcemap: true,
    lib: {
      entry: 'src/main/main.ts',
      formats: ['cjs'],
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/main'),
      '~': path.resolve(__dirname, './src/main'),
    },
  },
})
