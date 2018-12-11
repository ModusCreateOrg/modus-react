// Do this as the first thing so that any code reading it knows the right env.
process.env.BABEL_ENV = 'development';
process.env.NODE_ENV = 'development';

// Makes the script crash on unhandled rejections instead of silently
// ignoring them. In the future, promise rejections that are not handled will
// terminate the Node.js process with a non-zero exit code.
process.on('unhandledRejection', err => {
  throw err;
});

const path = require('path');
const find = require('find-file-up');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');

// Find .env or .env.local
const envFile =
  find.sync('.env') ||
  find.sync('.env.local') ||
  path.resolve(__dirname, '..', '.env.local');

require('dotenv').config({ path: envFile });

const defaultWebpackConfig = require('../webpack.config');

// Webpack overrides
const webpackOverrides =
  process.env.WEBPACK_CONFIG || find.sync(`webpack.config.js`);

// If webpack overrides exist, pass defaults and get new settings
const webpackConfig = webpackOverrides
  ? require(webpackOverrides)(defaultWebpackConfig)
  : defaultWebpackConfig;

const config = {
  port: process.env.PORT || 3000,
  host: process.env.PORT || '127.0.0.1',
};

const compiler = webpack(webpackConfig);

const devServerOptions = Object.assign({}, webpackConfig.devServer, {
  // webpack overrides go here
});
const server = new WebpackDevServer(compiler, devServerOptions);

server.listen(config.port, config.host, () => {
  console.log(`Starting server on http://${config.host}:${config.port}`);
});
['SIGINT', 'SIGTERM'].forEach(sig =>
  process.on(sig, () => {
    server.close();
    process.exit();
  })
);
