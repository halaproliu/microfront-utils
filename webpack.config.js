const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const ModuleFederationPlugin = webpack.container.ModuleFederationPlugin
module.exports = {
  mode: process.env.NODE_ENV,
  entry: {
    utils: path.resolve(__dirname, './src/main.js')
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  devtool: process.env.NODE_ENV === 'production' ? '' : 'eval-cheap-module-source-map',
  resolve: {
    extensions: ['.vue', '.jsx', '.js', 'json'],
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
      template: path.resolve(process.cwd(), './public/index.html'),
      minify: {
        removeComments: true
      }
    }),
    new ModuleFederationPlugin({
      name: 'utils',
      library: { type: 'var', name: 'utils' },
      filename: 'utils.js',
      exposes: {
        './Button': './src/components/Button.vue'
      }
    })
  ],
  devServer: {
    compress: true,
    port: 8082,
    hot: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers":
        "X-Requested-With, content-type, Authorization",
    },
  }
}