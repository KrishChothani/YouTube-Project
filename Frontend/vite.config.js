import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
      proxy:{
        '/api/v1' : 'http://localhost:8000',
        // '/api/v1' : 'you-tube-project-api.vercel.app'
      }
  },
  plugins: [react()],
})
