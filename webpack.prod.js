const path = require('path');
const merge = require('webpack-merge');

const common = require('./webpack.common');

module.exports = merge(common, {
	mode: 'production', // by default mode is set to production and minifies the js
	output: {
		filename: 'main.[contentHash].js',
		path: path.resolve(__dirname, 'dist')
	}
});