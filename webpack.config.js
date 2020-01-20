const path = require('path');

module.exports = {
	mode: 'development', // by default mode is set to production and minifies the js, here it doesnt
	entry: './src/index.js',
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'dist')
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				// does in reverse order, css-loader converts css to javascript, stlye-loader injects it into style tags
				use: ['style-loader', 'css-loader'] 
			}
		]
	}
}