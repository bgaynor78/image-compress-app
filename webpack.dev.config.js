const merge = require('webpack-merge');
const common = require('./webpack.common.config');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = merge(common, {
  output: {
    path: __dirname,
    publicPath: '/',
    filename: './dist/bundle.js'
  },
  module: {
    rules: [{
      test: /\.woff(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: 'file-loader',
      options: {
        name: '[name].[ext]'
      }
    }, {
      test: /\.woff2(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: 'file-loader',
      options: {
        name: '[name].[ext]'
      }
    }, {
      test: /\.ttf(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: 'file-loader',
      options: {
        name: '[name].[ext]'
      }
    }, {
      test: /\.eot(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: 'file-loader',
      options: {
        name: '[name].[ext]'
      }
    }]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.scss']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  },
  plugins: [
    new ExtractTextPlugin({
      filename: './dist/css/style.css',
      allChunks: true
    })
  ]
});