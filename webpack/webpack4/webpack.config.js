module.exports = {
	module : {
		rules :[ 
			{
				test : /\.(js|jsx)$/,
				exclude : /node_modules/,
				loaders : {
					loader : 'babel-loader'
				}
			}
		]
	}
};

