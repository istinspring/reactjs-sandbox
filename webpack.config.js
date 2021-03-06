/* eslint-env node */
var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
    app: [
      'webpack/hot/dev-server',
      'webpack-dev-server/client?http://localhost:9000',
      path.resolve(__dirname, 'app/client.jsx')
    ],
    vendor: [
      'flexboxgrid', 'material-ui', 'react-tap-event-plugin',
      'react', 'react-dom', 'redux', 'immutable',
      'react-redux', 'react-router', 'react-router-redux',
      'redux-devtools', 'redux-devtools-dock-monitor',
      'redux-devtools-log-monitor',
      'react-helmet', 'react-css-modules', 'react-flexbox-grid'
    ]
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  progress: true,
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js')
  ],
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loaders: ['babel-loader']
      },
      {
        test: /\.js$/,
        exclude: path.join(__dirname, 'node_modules'),
        loaders: ['babel-loader']
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader?modules&importLoaders=1',
        include: /flexboxgrid/
      },
      {
        test: /\.scss$/,
        loaders: [
          'style', 'css?sourceMap&modules&importLoaders=1', 'sass?sourceMap'
        ]
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.css']
  }
};
