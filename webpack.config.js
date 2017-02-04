const webpack = require('webpack');
const path = require('path');

module.exports = {
  devtool: "inline-source-map",
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    // preLoaders: [
    //   {
    //     test: /\.js$/,
    //     loader: 'baggage?[file].html&[file].css'
    //   }
    // ],
    loaders: [
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.html$/, loader: 'ngtemplate-loader?relativeTo=' + __dirname + '!html-loader' }
    ]
  }
};
