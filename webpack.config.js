const path = require('path');
const webpack = require('webpack');

let libraryName = 'DeTransform',
	fileName = 'detransform.js',
	mode = 'development';

module.exports = {
  entry: './src/index.js',
  output: {
    filename: fileName,
    path: path.resolve(__dirname, 'dist'),
    library: libraryName,
    libraryTarget: 'umd'
  },
  mode: mode
};