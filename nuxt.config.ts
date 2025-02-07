// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", 'nuxt-headlessui'],
  srcDir: "app",
  serverDir: "server",
  css: ["@fortawesome/fontawesome-svg-core/styles.css"],
})