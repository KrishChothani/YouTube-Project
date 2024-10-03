import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
      proxy:{
        '/api/v1' : 'http://localhost:8000',
        // '/api/v1' : 'https://youtube-backend-lilac.vercel.app'
      }
  },
  plugins: [react()],
})
