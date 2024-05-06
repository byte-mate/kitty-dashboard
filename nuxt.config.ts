// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "nuxt-jsonapi",
    "@nuxt/fonts",
    "nuxt-icons",
    "dayjs-nuxt",
  ]
});
