'use strict'

const CopyWebpackPlugin = require('copy-webpack-plugin')


module.exports = {
  entry: './client/app.jsx',
  output: {
    path: __dirname,
    filename: './public/build/bundle.js'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: /client/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: {
          presets: ['react', 'es2015'],
        }
      }, {
        test: /\.scss$/,
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
      }, {
        test: /\.(pdf)$/,
        loader: 'file-loader?name=[path][name].[ext]',
        include: /client\/assets/
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: 'node_modules/pdfjs-dist/cmaps/',
        to: './public/build/cmaps/'
      },
    ])
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.png', '.pdf', '*']
  }
}
