module.exports = {
  entry: {
        index: './Src/Index/Index',
    },
    devtool: "cheap-module-source-map",
  output: {
    path: 'Public',
    filename: 'Try_JS_Error.js'
  },
  module: {
    loaders: [
      {
          test: /\.js$/,
          loader: 'babel',
          exclude: __dirname + '/node_modules',
          //include: __dirname + '/Src',
      },
    ],
  },
  plugins: [
       
  ],
};
