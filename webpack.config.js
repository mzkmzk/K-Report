module.exports = {
  entry: {
        index: './Src/Index',
    },
    //devtool: "cheap-module-source-map",
  output: {
    path: 'Public',
    filename: 'index.bundle.js'
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
