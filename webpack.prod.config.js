const merge = require('webpack-merge');
const common = require('./webpack.common.config.js');
const path = require('path');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = merge(common, {
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.woff(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: 'file-loader',
      options: {
        outputPath: 'fonts/',
        publicPath: '../fonts/',
        name: '[name].[ext]'
      }
    }, {
      test: /\.woff2(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: 'file-loader',
      options: {
        outputPath: 'fonts/',
        publicPath: '../fonts/',
        name: '[name].[ext]'
      }
    }, {
      test: /\.ttf(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: 'file-loader',
      options: {
        outputPath: 'fonts/',
        publicPath: '../fonts/',
        name: '[name].[ext]'
      }
    }, {
      test: /\.eot(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: 'file-loader',
      options: {
        outputPath: 'fonts/',
        publicPath: '../fonts/',
        name: '[name].[ext]'
      }
    }]
  },
  devtool: 'source-map',
  plugins: [
    new UglifyJSPlugin({
      sourceMap: true
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new ExtractTextPlugin({
      filename: './css/style.css',
      allChunks: true
    })
  ]
});