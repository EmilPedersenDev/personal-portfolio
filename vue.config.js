module.exports = {
  publicPath:
    process.env.NODE_ENV === "production" ? "/personal-portfolio/" : "/",
  css: {
    loaderOptions: {
      sass: {
        prependData: `
        @import "./src/assets/styles/colors.scss";
        @import "./src/assets/styles/__mixins.scss";
        @import "./src/assets/styles/__animation.scss";
        `,
      },
    },
  },
};
