// Do this as the first thing so that any code reading it knows the right env.
process.env.BABEL_ENV = 'production';
process.env.NODE_ENV = 'production';

// Makes the script crash on unhandled rejections instead of silently
// ignoring them. In the future, promise rejections that are not handled will
// terminate the Node.js process with a non-zero exit code.
process.on('unhandledRejection', err => {
  throw err;
});

const path = require('path');
const find = require('find-file-up');
const webpack = require('webpack');
const rimraf = require('rimraf');
const copyPublicFolder = require('../utils/public');

// load env variables
require('../utils/env');

const projectRoot = process.env.INIT_CWD;
const buildDir = path.join(projectRoot, process.env.BUILD_DIR);

const defaultWebpackConfig = require('../webpack.config');

// Webpack overrides
const webpackOverrides =
  process.env.WEBPACK_CONFIG || find.sync(`webpack.config.js`);

// If webpack overrides exist, pass defaults and get new settings
const webpackConfig = webpackOverrides
  ? require(webpackOverrides)(defaultWebpackConfig)
  : defaultWebpackConfig;

const compiler = webpack(webpackConfig);

// delete build folder before proceeding
rimraf(buildDir, {}, () => {
  // copy public assets
  copyPublicFolder();

  // run webpack
  compiler.run((err, stats) => {
    if (err) {
      console.error(err);
      return;
    }

    console.log(
      stats.toString({
        chunks: false,
        modules: false,
        children: false,
        colors: {
          green: '\u001b[32m',
        },
      })
    );
  });
});
