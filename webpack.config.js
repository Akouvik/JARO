const path = require('path');

module.exports = {
	mode: 'development',
	entry: ['./src/index.js', 'webpack/hot/dev-server'],
	output: {
		path: path.resolve(__dirname, "build/"),
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			},
			{
				test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
			}
		]
	},
	devServer: {
		contentBase: path.join(__dirname, 'public/'),
		port: 8080,
		publicPath: 'http://localhost:8080/build/',
		hotOnly: true,
		historyApiFallback: false,
	},
	resolve: {
		extensions: ['*', '.js', '.jsx']
	}
}