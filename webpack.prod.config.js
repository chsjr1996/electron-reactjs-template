const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
require('babel-polyfill');

module.exports = {
  devtool: 'eval-source-map',
  target: 'electron-renderer',
  resolve: {
    extensions: ['', '.ts'],
    modulesDirectories: ['node_modules', 'src/renderer']
  },
  entry: {
    app: './src/renderer/entry.jsx',
    vendor: [
      // react related
      'react',
      'react-dom',
      'react-redux',
      'react-router',
      'redux'
    ]
  },
  output: {
    path: path.join(__dirname, 'out', 'static'),
    filename: '[name].bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.tsx?$/,
        exclude: /(node_modules|vendor)/,
        loaders: ['ts-loader']
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: ['file-loader']
      }
    ],
    noParse: [/(html2canvas)/]
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(true),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    new HtmlWebpackPlugin({
      template: 'src/renderer/index.html',
      chunksSortMode: 'none'
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new webpack.NoErrorsPlugin()
  ]
};
