'use strict'

const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')


module.exports = {
  entry: './client/app.jsx',
  output: {
    path: path.join(__dirname, './public/dist'),
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.pdf$/,
        use: 'url-loader'
      }, {
        test: /\.jsx?$/,
        include: /client/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: {
          presets: ['react', 'es2015'],
          plugins: ['transform-class-properties']
        }
      }, {
        test: /\.(scss|css)$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }, {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              mimetype: 'image/png'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: './public/index.html' },
      { from: './client/assets/resume.pdf' },
      { from: 'node_modules/pdfjs-dist/cmaps/', to: 'cmaps/' }
    ])
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.png', '.pdf', '*']
  }
}
