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
      //exclude: [/node_modules/, /bin/],
      // include(filepath) {
      //     if (filepath.includes('react-notifications')) return true;
      //     return false;
      // },
      loader: "style-loader!css-loader!postcss-loader"
    }, {
        test: /\.scss$/,
        //exclude: [/node_modules/, /bin/],
        loader: "style-loader!css-loader!postcss-loader!sass-loader"
    },{
      test: /\.less$/,
      exclude: [/node_modules/, /bin/],
      loader: "style-loader!css-loader!less-loader!js-to-styles-var-loader"
    }, {
      test: /\.png$/,
      exclude: [/node_modules/, /bin/],
      loader: "url-loader?limit=1000000&mimetype=image/png"
    }, {
      test: /\.jsx$/,
      exclude: [/node_modules/, /bin/],
      loader: "babel-loader"
    },
      {
      test: /\.(jpe?g|png|gif)$/i,
      loaders: [
        'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
        'image-webpack-loader?bypassOnDebug&optimizationLevel=7&interlaced=false'
      ]
    },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "url-loader?limit=10000&minetype=application/font-woff"
    },
      { test: /\.(ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: "file-loader"
    },
      {
      test: /\.svg$/,
      use: [
        {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'react']
          }
        },
        {
          loader: 'react-svg-loader'
        }
      ]
    }]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },

  devtool: "source-map",
 // watch: true,
  watchOptions: {
    aggregateTimeout: 100
  },
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    host: 'localhost', // Defaults to `localhost`
    port: 3000, // Defaults to 8080
    proxy: {
      '/api/*': {
        target: 'http://localhost:4000/',
        secure: false,
        changeOrigin: true
      }
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin({
      multiStep: true
    })
  ]
};