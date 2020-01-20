const path = require('path');
const merge = require('webpack-merge');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const common = require('./webpack.common');

module.exports = merge(common, {
	mode: 'production', // by default mode is set to production and minifies the js
	output: {
		filename: 'main.[contentHash].js',
		path: path.resolve(__dirname, 'dist')
	},
	optimization: {
		minimizer: [
			new OptimizeCssAssetsPlugin(),
			new TerserPlugin(),
			new HtmlWebpackPlugin({
				template: './src/template.html',
				minify: {
					// removeAttributeQuotes: true,
					collapseWhitespace: true,
					removeComments: true
				}
			})
		]
	},
	plugins: [new MiniCssExtractPlugin({filename: '[name].[contentHash].css'}) ,new CleanWebpackPlugin()],
	module: {
		rules: [
			{
				test: /\.scss$/,
				// does in reverse order, css-loader converts css to javascript, stlye-loader injects it into style tags into DOM
				use: [
					MiniCssExtractPlugin.loader, // extract css into files
					'css-loader', 
					'sass-loader'] 
			}
		]
	}
});