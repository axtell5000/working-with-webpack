const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'development', // by default mode is set to production and minifies the js, here it doesnt
	entry: './src/index.js',
	output: {
		filename: 'main.[contentHash].js',
		path: path.resolve(__dirname, 'dist')
	},
	plugins: [new HtmlWebpackPlugin({
		template: './src/template.html'
	})],
	module: {
		rules: [
			{
				test: /\.scss$/,
				// does in reverse order, css-loader converts css to javascript, stlye-loader injects it into style tags into DOM
				use: ['style-loader', 'css-loader', 'sass-loader'] 
			}
		]
	}
}