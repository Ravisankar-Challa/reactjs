const webpack = require('webpack');
const path = require('path');
  
const SRC_DIR = path.resolve(__dirname, 'src');
const BUILD_DIR = path.resolve(__dirname, 'public');

const prod = process.argv.indexOf('-p') !== -1;
   
const webpackConfig = {
	entry: SRC_DIR + '/Main.js',
	output: {
		path: BUILD_DIR,
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				include: SRC_DIR,
				exclude: /(node_modules)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['es2015', 'react']
					}
				}
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			},
			{
				test: /\.(png|jpg|gif|svg|eot|tff|woff|woff2)$/,
				use: {
					loader: 'url-loader',
					options: {
						limit: 20000000
					}
				}
			}
		]
	}
};
module.exports = webpackConfig;