const path = require('path');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const common = require('./webpack.common');

module.exports = merge(common, {
	mode: 'development', // by default mode is set to production and minifies the js, here it doesnt
	output: {
		filename: 'main.js',
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
});