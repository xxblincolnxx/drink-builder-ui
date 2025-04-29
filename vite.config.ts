import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Drink Builder',
        short_name: 'Drink Builder',
        theme_color: '#ffffff',
        // icons: [
        //   {
        //     src: './assets/icon-192x192.png',
        //     sizes: '192x192',
        //     type: 'image/png',
        //   },
        // ],
      },
    }),
  ],
});
