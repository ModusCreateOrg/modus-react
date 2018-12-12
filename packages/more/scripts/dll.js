const path = require('path');
const webpack = require('webpack');
const webpackConfig = path.resolve(__dirname, '../webpack.dll.config');

const defaultWebpackConfig = require(webpackConfig);
const compiler = webpack(defaultWebpackConfig);
compiler.run();
