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
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/react') || id.includes('node_modules/react-dom') || id.includes('node_modules/react-router-dom')) {
            return 'vendor-react';
          }
          if (id.includes('node_modules/framer-motion') || id.includes('node_modules/gsap')) {
            return 'vendor-animation';
          }
          if (id.includes('node_modules/@radix-ui') || id.includes('node_modules/lucide-react')) {
            return 'vendor-ui';
          }
          if (id.includes('node_modules/react-fast-marquee') || id.includes('node_modules/react-countup') || id.includes('node_modules/clsx') || id.includes('node_modules/tailwind-merge') || id.includes('node_modules/class-variance-authority')) {
            return 'vendor-misc';
          }
        },
      },
    },
    cssCodeSplit: true,
    sourcemap: false,
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
