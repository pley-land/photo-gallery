const webpack = require('webpack');
const path = require('path');

module.exports = {
  context: path.join(__dirname, '/client'),
  entry: path.join(__dirname, '/client/index.jsx'),
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'env'],
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            },
          },
        ],
      },
    ],
  },
  output: {
    path: path.join(__dirname, '/public'),
    filename: 'app.js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css'],
  },
  watch: true,
};
