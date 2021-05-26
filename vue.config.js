module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `
        @import "./src/assets/styles/colors.scss";
        `,
      },
    },
  },
};
