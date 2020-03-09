const MiniCSSExtractPlugin = require('mini-css-extract-plugin')
const webpack = require('webpack')
const path = require('path')
const {
  SRC,
  DIST
} = require('./paths')

module.exports = {
  // We'll place webpack configuration for all environments here
  entry: {
    scripts: path.resolve(SRC, 'js', 'index.js')
  },
  output: {
    // Put all the bundled stuff in your dist folder
    path: DIST,
    // Our single entry point from above will be named "scripts.js"
    filename: '[name].js',
    // The output path as seen from the domain we're visiting in the browser
    publicPath: DIST
  },
  module: {
    rules: [{
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|eot|svg|ttf|woff|woff2|otf|ttf)$/,
        use: {
          loader: "url-loader",
          options: {
            publicPath: "./",
            name: "[name].[ext]",
            limit: 10000
          }
        }
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [{
            loader: MiniCSSExtractPlugin.loader
          },
          'css-loader',
          'sass-loader',
        ]
      },
      {
        test: require.resolve('jquery'),
        use: [{
          loader: 'expose-loader',
          options: 'jQuery'
        }, {
          loader: 'expose-loader',
          options: '$'
        }]
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    }),
    new MiniCSSExtractPlugin({
      filename: "../dist/estilos.css"
    })
  ]
}