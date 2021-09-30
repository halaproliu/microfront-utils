const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
module.exports = {
  mode: process.env.NODE_ENV,
  entry: {
    app: path.resolve(__dirname, './src/main.js')
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  devtool: process.env.NODE_ENV === 'production' ? '' : 'eval-cheap-module-source-map',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          },
          { loader: 'stylus-loader' }
        ]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new CleanWebpackPlugin(),
    new webpack.DefinePlugin({
      PRODUCTION: JSON.stringify(true)
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
  ]
}