// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/ui',
    '@nuxt/content',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/fonts',
    'nuxt-studio'
  ],
  ssr: false, // Disable SSR for GitHub Pages
  target: 'static',
  
  app: {
    baseURL: '/', // Replace with your actual repository name
    buildAssetsDir: 'assets',
  },
  
  // Optional but recommended
  nitro: {
    preset: 'github-pages'
  },
  devServer: {
    port: 3000, // Optional: specify your desired port
    host: "0.0.0.0", // Listen on all network interfaces
  },
  devtools: {
    enabled: true
  },
  content: {

  },
  image:{
    provider: 'none',
  },  
  css: ['~/assets/css/main.css'],
  routeRules: {
    '/': { prerender: true }
  },
  compatibilityDate: '2025-01-15',
  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  }
})