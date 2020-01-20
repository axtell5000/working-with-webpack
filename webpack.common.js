const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/index.js',
	plugins: [new HtmlWebpackPlugin({
		template: './src/template.html'
	})],
	module: {
		rules: [
			{
				test: /\.scss$/,
				// does in reverse order, css-loader converts css to javascript, stlye-loader injects it into style tags into DOM
				use: ['style-loader', 'css-loader', 'sass-loader'] 
			},
			{
				test: /\.html$/,
				use: ['html-loader']
			},
			{
				test: /\.(svg|png||jpg|gif)$/,
				use: {
					loader: 'file-loader',
					options: {
						esModule: false, // had to do this
						name: '[name].[hash].[ext]',
						outputPath: 'imgs'
					}
				}
			}
		]
	}
}