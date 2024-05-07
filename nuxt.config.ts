import { installPrompt } from "virtual:nuxt-pwa-configuration";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", 'nuxt-icon', '@vite-pwa/nuxt'],
  buildModules: [
    '@nuxtjs/pwa',
  ],
  pwa: {
    registerType: 'autoUpdate',
    manifest: {
      name: "Burger Drive",
      short_name: "BurgerDrive",
      description: "Burge Drive app",
      lang: "en",
      theme_color: "#FF0000",
      icons: [
        {
          src: 'icon.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: 'icon2.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: 'icon3.png',
          sizes: '512x512',
          type: 'image/png',
        },
      ],
    },
    workbox: {
      globPatterns: ['**/*.{js,css,html,png,svg,ico}'],
    },
    injectManifest: {
      globPatterns: ['**/*.{js,css,html,png,svg,ico}'],
    },
    client: {
      installPrompt: true,
      // you don't need to include this: only for testing purposes
      // if enabling periodic sync for update use 1 hour or so (periodicSyncForUpdates: 3600)
      // periodicSyncForUpdates: 20,
    },
  }
})