const webpack = require('webpack');

module.exports = {
  entry: './app.jsx',
  output: {
    path: __dirname + '/bin',
    filename: 'app.bundle.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: [/node_modules/, /bin/],
      loader: 'babel-loader',
    }, {
      test: /\.css$/,
      exclude: [/node_modules/, /bin/],
      loader: "style-loader!css-loader!autoprefixer-loader"
    }, {
      test: /\.less$/,
      exclude: [/node_modules/, /bin/],
      loader: "style-loader!css-loader!autoprefixer-loader!less-loader"
    }, {
      test: /\.png$/,
      exclude: [/node_modules/, /bin/],
      loader: "url-loader?limit=1000000&mimetype=image/png"
    }, {
      test: /\.jsx$/,
      exclude: [/node_modules/, /bin/],
      loader: "babel-loader"
    }, {
      test: /\.svg$/,
      use: [
        {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'react']
          }
        },
        {
          loader: 'react-svg-loader'
        }
      ]
    }]
  },

  devtool: "source-map",
  watch: true,
  watchOptions: {
    aggregateTimeout: 100
  }
};