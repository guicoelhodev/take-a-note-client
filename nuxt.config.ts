// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindTypography from "@tailwindcss/typography";

export default defineNuxtConfig({
  devtools: { enabled: true },

  srcDir: "./src",
  buildDir: "dist",
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/apollo", "@pinia/nuxt"],
  tailwindcss: {
    config: {
      plugins: [tailwindTypography],
    },
  },
  css: ["@/assets/css/main.css"],
  apollo: {
    clients: {
      default: {
        httpEndpoint: "http://localhost:8080/",
      },
    },
  },
  ssr: false,

  runtimeConfig: {
    public: {
      PROD: process.env.PROD_ENVIRONMENT,
    },
  },
});
