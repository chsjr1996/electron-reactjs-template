const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    modules: ['node_modules', 'src/renderer'],
    alias: {
      '@Root': path.resolve(__dirname, 'src/renderer/'),
      '@Page': path.resolve(__dirname, 'src/renderer/pages/'),
      '@Component': path.resolve(__dirname, 'src/renderer/components/'),
      '@Util': path.resolve(__dirname, 'src/renderer/utils/')
    }
  },
  entry: {
    app: ['./src/renderer/index.tsx']
  },
  output: {
    path: path.join(__dirname, 'build', 'renderer'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(?:tsx|ts)$/,
        exclude: /(node_modules|vendor)/,
        use: ['ts-loader']
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: ['file-loader']
      }
    ],
    noParse: [/html2canvas/]
  },
  devServer: {
    historyApiFallback: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/renderer/index.html'
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ]
};
