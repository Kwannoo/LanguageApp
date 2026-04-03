import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      workbox: {
        cleanupOutdatedCaches: true,
        globPatterns: ['**/*.{js,css,ico,png,svg,woff2}'],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fonts\.(googleapis|gstatic)\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'google-fonts',
              expiration: { maxEntries: 10, maxAgeSeconds: 60 * 60 * 24 * 365 },
            },
          },
          {
            urlPattern: /^https:\/\/.*\.supabase\.co\/rest\/v1\/words.*/i,
            handler: 'NetworkFirst',
            options: {
              cacheName: 'supabase-words',
              expiration: { maxEntries: 5, maxAgeSeconds: 60 * 60 * 24 },
              networkTimeoutSeconds: 3,
            },
          },
        ],
      },
      manifest: {
        name: 'Vocably',
        short_name: 'Vocably',
        description: 'Learn Dutch & Japanese flashcards',
        theme_color: '#1CB0F6',
        background_color: '#EFF6FF',
        display: 'standalone',
        start_url: '/',
        icons: [
          { src: '/transparent-white-logo.png', sizes: '192x192', type: 'image/png' },
          { src: '/transparent-white-logo.png', sizes: '512x512', type: 'image/png' },
        ],
      },
    }),
  ],
})
