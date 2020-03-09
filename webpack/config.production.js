const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const merge = require('webpack-merge')

module.exports = merge(require('./config.base.js'), {
  mode: 'production',
  // We'll place webpack configuration for production environment here
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        test: /\.js(\?.*)?$/i
      }),
      new OptimizeCSSAssetsPlugin()
    ]
  }
})