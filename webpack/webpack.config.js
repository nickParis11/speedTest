
var path = require('path');

module.exports = {
	// devtool : 'inline-source-map',
	entry : __dirname + '/src/index.jsx',
	output : {
		path : __dirname + '/www/',
		filename : 'main.js'
	},
	module : {
		rules : [
			{
				test : /\.(js|jsx)$/,
				exclude : /node_modules/,
				use : {
					loader : 'babel-loader'
				}, 
			}
		]
	}
}


// const config = {
//   entry: `${APP_DIR}/Index.jsx`,
//   output: {
//     path: BUILD_DIR,
//     filename: 'bundle.js',
//   },
//   module: {
//     loaders: [
//       {
//         test: /\.jsx?/,
//         include: APP_DIR,
//         loader: 'babel-loader',
//         query: {
//           presets: ['react', 'es2015'],
//           plugins: ['transform-decorators-legacy', 'transform-object-rest-spread'],
//         },
//       },
//       {
//         test: /\.(png|jpg)$/,
//         loader: 'url-loader?limit=8192',
//       },
//     ],
//   },