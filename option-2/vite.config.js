import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/hackthon/option-2/' : '/',
  plugins: [react()],
  build: { outDir: '../dist/option-2', emptyOutDir: true },
}))
