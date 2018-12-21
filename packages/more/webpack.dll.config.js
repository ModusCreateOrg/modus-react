// @ts-check
const webpack = require('webpack');
const path = require('path');

const outputPath = path.join(__dirname, 'dll');
const pkgJson = path.resolve(process.env.INIT_CWD, 'package.json');

const config = require(pkgJson);
const customLibs = Array.isArray(config && config.dll) ? config.dll : [];

/**
 * @type {import('webpack').Configuration}
 */
const webpackConfig = {
  mode: 'development',
  entry: {
    libs: [
      'react',
      'react-dom',
      'react-router',
      'react-router-dom',
      ...customLibs,
    ],
  },

  output: {
    filename: '[name].dll.js',
    path: outputPath,

    // The name of the global variable which the library's
    // require() function will be assigned to
    library: '[name]_dll',
  },

  plugins: [
    new webpack.DllPlugin({
      // The path to the manifest file which maps between
      // modules included in a bundle and the internal IDs
      // within that bundle
      path: path.join(outputPath, '[name]-manifest.json'),
      // The name of the global variable which the library's
      // require function has been assigned to. This must match the
      // output.library option above
      name: '[name]_dll',
    }),
  ],
};

module.exports = webpackConfig;
