module.exports= {
  entry: __dirname +`public/src/index.jsx`,
  output: {
    path:  __dirname +`public/build`,
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader?limit=8192',
      },
    ],
  }
}



