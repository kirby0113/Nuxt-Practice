export default {
  runtimeConfig: {
    serviceDomain: process.env.MICROCMS_SECRET_DOMAIN || "",
    apiKey: process.env.MICROCMS_API_KEY || "",
  },

  microcms: {
    options: {
      serviceDomain: process.env.MICROCMS_SECRET_DOMAIN || "",
      apiKey: process.env.MICROCMS_API_KEY || "",
    },
    mode: process.env.NODE_ENV === "production" ? "server" : "all",
  },
};
