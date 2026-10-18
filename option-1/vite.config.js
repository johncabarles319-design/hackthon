import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/hackthon/option-1/' : '/',
  plugins: [react()],
  build: { outDir: '../dist/option-1', emptyOutDir: true },
}))
