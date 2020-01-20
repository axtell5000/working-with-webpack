const path = require('path');
const merge = require('webpack-merge');

const common = require('./webpack.common');

module.exports = merge(common, {
	mode: 'development', // by default mode is set to production and minifies the js, here it doesnt
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'dist')
	}
});