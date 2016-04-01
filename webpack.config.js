'use strict';

import { join, resolve } from 'path';
import webpack from 'webpack';

import pkg from './package.json';

export default {
  devtool: 'source-map',
  entry: [
    'webpack/hot/dev-server',
    './src/index.js'
  ],
  resolve: {
    extensions: ['', '.js', '.jsx', '.scss'],
    alias: {
      'es6-promise': resolve(__dirname, 'node_modules/es6-promise/dist/es6-promise.js'),
      'fetch': resolve(__dirname, 'node_modules/whatwg-fetch/fetch.js')
    }
  },
  output: {
    path: join(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    preLoaders: [
      { test: /\.js$/, loader: 'eslint-loader', exclude: /node_modules/ }
    ],
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.css$/, loader: 'style-loader!css-loader', exclude: /node_modules/ }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.ProvidePlugin({
      'Promise': 'es6-promise',
      'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
    }),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      __CONFIG__: JSON.stringify(pkg),
      'process.env': {
        NODE_ENV: JSON.stringify('development')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      minimize: false,
      compress: {
        warnings: false
      }
    })
  ]
};
