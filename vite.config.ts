import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "./src"),
    },
  },
  server: {
    watch: {
      // Prevent EBUSY errors on Windows when large binary files are open
      ignored: [
        "**/src/assets/images/**",
        "**/*.webp",
        "**/*.mp4",
        "**/*.png",
        "**/*.jpg",
        "**/*.jpeg",
        "**/*.gif",
        "**/*.svg",
        "**/*.woff",
        "**/*.woff2",
        "**/*.ttf",
      ],
    },
  },
})
