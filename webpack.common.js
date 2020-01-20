const path = require('path');


module.exports = {
	entry: './src/index.js',

	module: {
		rules: [		
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