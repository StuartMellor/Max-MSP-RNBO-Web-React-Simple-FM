const TerserPlugin = require('terser-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
// const dotenv = require('dotenv').config({
//   path: path.resolve(`${__dirname}./.env`),
// });

module.exports = {
  mode: 'development',
  // optimization: {
  //   minimizer: [new TerserPlugin({ /* additional options here */ })],
  // },
  // optimization: {

  // },
  entry: './src/public/App.jsx',
  output: {
    path: path.resolve(`${__dirname}/static/public/dist`),
    filename: '[name].bundle.js',
  },
  devtool: 'source-map',
  plugins: [
    // new webpack.DefinePlugin({
    //   'process.env': dotenv.parsed,
    // }),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: [
          /\.test.js$/,
          /node_modules/,
        ],
        use: ['babel-loader'], // 'eslint-loader'],
      },

      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true, // webpack@1.x
              disable: true, // webpack@2.x and newer
            },
          },
        ],
      }],
  },
  watch: true,
  node: {
    // fs: 'empty',
  },
};
