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
      test: /\.(jpe?g|png|gif|svg)$/i,
      loaders: [
        'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
        'image-webpack-loader?bypassOnDebug&optimizationLevel=7&interlaced=false'
      ]
    }, { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: "url-loader?limit=10000&minetype=application/font-woff"
    }, { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: "file-loader"
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