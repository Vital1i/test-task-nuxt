// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  app: {
    head: {
      title: 'Sage Trader — Money Transfers',
      meta: [
        {
          name: 'description',
          content:
            'Money transfers overview with balance chart, connected accounts, and recent transfers.'
        }
      ],
      link: [{ rel: 'icon', type: 'image/png', href: '/favicon.ico' }]
    }
  }
})
