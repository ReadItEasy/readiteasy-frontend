module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/" : "/",
  css: {
    loaderOptions: {
      sass: {
        // for sass-loader < 8.0.0, use 'data', for 8 < version < 9, use prependData
        prependData: `
              @import "@/scss/_variables.scss";
              `,
        // @import "@/scss/_mixins.scss";
      },
    },
  },
};
