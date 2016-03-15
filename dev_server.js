/* Webpack dev server */
/* eslint-env node */
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var webpackConfig = require('./webpack.config');

var compiler = webpack(webpackConfig);
var server = new WebpackDevServer(compiler, {
  devtool: 'eval',
  contentBase: 'build',

  hot: true,
  // Enable special support for Hot Module Replacement
  // Page is no longer updated, but a "webpackHotUpdate"
  // message is send to the content
  // Use "webpack/hot/dev-server" as additional module in your entry point
  // Note: this does _not_ add the `HotModuleReplacementPlugin`
  // like the CLI option does.

  // Set this as true if you want to access dev server from arbitrary url.
  // This is handy if you are using a html5 router.
  historyApiFallback: true,

  // Set this if you want webpack-dev-server to delegate a single path to
  // an arbitrary server.
  // Use "*" to proxy all paths to the specified server.
  // This is useful if you want to get rid of 'http://localhost:8080/'
  // in script[src], and has many other use cases
  // (see https://github.com/webpack/webpack-dev-server/pull/127 ).
  // proxy: {
  //   '/api/*': {
  //     target: 'http://localhost:3000/',
  //     secure: false
  //   }
  // },

  // webpack-dev-middleware options
  quiet: false,
  noInfo: false,
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000
  },
  stats: {
    assets: true,
    colors: true,
    timings: true,
    version: false,
    chunks: false,
    chunkModules: true
  },
  // CORS in case
  headers: { 'Access-Control-Allow-Origin': '*' }
});

server.listen(9000, 'localhost', function(err) {
  if (err) {
    console.log(err);
  }
  console.log('Listening at localhost:9000');
});
