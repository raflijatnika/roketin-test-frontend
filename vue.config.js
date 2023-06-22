module.exports = {
  productionSourceMap: false,
  chainWebpack: () => {},
  transpileDependencies: ['vuetify'],
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
          @import "./src/modules/app/assets/styles/custom.scss";
        `,
      },
    },
  },
  configureWebpack: {
    optimization: {
      runtimeChunk: 'single',
      splitChunks: {
        chunks: 'all',
        maxInitialRequests: Infinity,
        minSize: 0,
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name(module) {
              const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
              return `lib.${packageName.replace('@', '')}`;
            },
          },
        },
      },
    },
  },
};
