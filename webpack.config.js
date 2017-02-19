var webpack = require('webpack');
var path = require('path');
var libraryName = 'k_report';


module.exports = {
  entry: {
        index: './Src/KReport',
    },
    //devtool: "cheap-module-source-map",
  output: {
    path: 'Public',
    filename: 'index.bundle.js',
    library: libraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    preLoaders: [
        {
            test: /\.js$/,
            loader: 'eslint-loader',
            include: __dirname+ '/Src',
        }
    ],
    loaders: [
      {
          test: /\.js$/,
          loader: 'babel',
          //exclude: __dirname + '/node_modules',
          //include: __dirname + '/Src',
      },
    ],
  },
  plugins: [
       
  ],
};
