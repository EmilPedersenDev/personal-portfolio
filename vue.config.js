module.exports = {
  publicPath:
    process.env.NODE_ENV === "production" ? "/personal-portfolio/" : "/",
  css: {
    loaderOptions: {
      sass: {
        prependData: `
        @import "@/assets/styles/main.scss";
        `,
      },
    },
  },
};
