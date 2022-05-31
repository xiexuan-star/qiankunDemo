const config = {
  devServer: {
    port: 8001
  },
  configureWebpack: {
    output: {
      library: 'child-app',
      libraryTarget: 'umd',
      jsonpFunction: 'webpackJsonp_child_app'
    }
  },
  chainWebpack(config) {
    return config;
  }
};

module.exports = config;
