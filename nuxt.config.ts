// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindTypography from "@tailwindcss/typography";

export default defineNuxtConfig({
  devtools: { enabled: true },
  srcDir: "./src",
  modules: ["@nuxtjs/tailwindcss"],
  tailwindcss: {
    config: {
      plugins: [tailwindTypography],
    },
  },
});
