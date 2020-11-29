const path = require('path')
const {
  override,
  addWebpackAlias
} = require('customize-cra')
module.exports = {
  webpack: (config, env) => {

    if (env === 'production') {
      config.optimization.splitChunks = {
        cacheGroups: {
          commons: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendor',
            minChunks: 1,
            chunks: 'initial'
          }
        }
      }
      config.optimization.runtimeChunk = {
        name: 'mainfest'
      }

    }
    return config
  }
}