import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/Hemanth_Reddy_Portfolio/', // Add this line
  plugins: [react()],
})
