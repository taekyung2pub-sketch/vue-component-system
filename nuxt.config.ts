export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',

  devtools: {
    enabled: true,
  },

  css: ['~/assets/styles/front.scss'],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @import "@/assets/styles/abstracts/_variables.scss";
            @import "@/assets/styles/abstracts/_mixins.scss";
          `,
        },
      },
    },
  },
})