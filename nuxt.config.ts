import { defineNuxtConfig } from "nuxt";

export default defineNuxtConfig({
  runtimeConfig: {
    serviceDomain: process.env.MICROCMS_SECRET_DOMAIN || "",
    apiKey: process.env.MICROCMS_API_KEY || "",
  },
  css: ["@/assets/scss/common.scss"],

  microcms: {
    options: {
      serviceDomain: process.env.MICROCMS_SECRET_DOMAIN || "",
      apiKey: process.env.MICROCMS_API_KEY || "",
    },
    mode: process.env.NODE_ENV === "production" ? "server" : "all",
  },
});
