module.exports = {
  entry: './entry.js',
  output: {
    path: __dirname,
    filename: 'scripts.js'
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: 'style!css' },
      { test: /\.html$/, loader: 'ng-cache' }
    ]
  }
};
