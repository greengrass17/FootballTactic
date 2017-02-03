const path = require('path');

module.exports = {
  devtool: "inline-source-map",
  entry: './index.js',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js',
    // path: path.resolve(__dirname, 'dist'),
  },
  module: {
    // preLoaders: [
    //   {
    //     test: /\.js$/,
    //     loader: 'baggage?[file].html&[file].css'
    //   }
    // ],
    loaders: [
      { test: /\.css$/, loader: 'style!css' },
      { test: /\.html$/, loader: 'ngtemplate?relativeTo=' + __dirname + '!html' }
    ]
  }
};
