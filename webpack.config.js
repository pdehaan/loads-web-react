'use strict';

import { join, resolve } from 'path';
import webpack from 'webpack';

export default {
  devtool: 'source-map',
  entry: [
    'webpack/hot/dev-server',
    './src/index.js'
  ],
  resolve: {
      extensions: ['', '.js', '.jsx', '.scss'],
      alias: {
        'es6-promise': join(__dirname, 'node_modules', 'es6-promise', 'dist', 'es6-promise.js'),
        'fetch': join(__dirname, 'node_modules', 'whatwg-fetch', 'fetch.js')
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
    new webpack.optimize.UglifyJsPlugin({ minimize: true }),
    new webpack.NoErrorsPlugin()
  ]
};
