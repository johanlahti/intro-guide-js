const webpack = require('webpack');

module.exports = {
	entry: './test/js/initWithEs2015.js',
	output: {
		path: './test/js',
		filename: 'initWithEs2015_transpiled.js'
		// libraryTarget: "umd"
	},
	module: {
		loaders: [{
			test: /\.js$/,
			exclude: /(node_modules|dist)/g,
			loader: 'babel',
			query: {
				presets: ['es2015'] // 'stage-0', 'react']
			}
		}]
	},
	plugins: [
		// new webpack.optimize.UglifyJsPlugin({
		// 	compress: {
		// 		warnings: false
		// 	},
		// 	output: {
		// 		comments: false
		// 	}
		// }),
		// new webpack.DefinePlugin({
		// 	'process.env': {
		// 		'NODE_ENV': JSON.stringify('production')
		// 	}
		// })
	]
}