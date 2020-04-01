const path = require('path');
const webpack = require('webpack');

let libraryName = 'DeTransform',
	fileName = 'detransform',
  mode = process.argv[3];

if (mode === 'production') {
  fileName += '.min.js';
} else {
  fileName += '.js';
  mode = 'development';
}

module.exports = {
  entry: './src/index.js',
  output: {
    filename: fileName,
    path: path.resolve(__dirname, 'dist/build'),
    library: libraryName,
    libraryTarget: 'umd'
  },
  mode: mode
};