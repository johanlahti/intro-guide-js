const webpack = require('webpack');

module.exports = {
	entry: './js/initIntroGuide.js',
	output: {
		path: './dist/js',
		filename: 'bundle.js',
		library: "initIntroGuide",
		libraryTarget: "umd"
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