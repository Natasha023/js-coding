import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

module.exports = {
  devtool: 'source-map',
  mode: 'production'
  entry: [
    path.resolve(__dirname, './client/src/app/index.js')
  ],
  target: 'web',
  output: {
    path: path.resolve(__dirname, './client/dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: './client/src/app/index.html',
      inject: true
    })
  ],
  module: {
    rules : [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: ['babel-loader'],
        },
        {
          test: /\.css$/,
          use: [MiniCssExtractPlugin.loader,'style-loader', 'css-loader'],
        }
    ]
  }
}