export default {
  // 略

  buildModules: ["nuxt-microcms-module"],
  microcms: {
    options: {
      serviceDomain: "service-domain",
      apiKey: "2fc820ea0e8643e4978f81750916ad5b09e6",
    },
    mode: process.env.NODE_ENV === "production" ? "server" : "all",
  },
};
