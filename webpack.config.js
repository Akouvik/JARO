const path = require('path');

module.exports = {
	devtool: 'inline-source-map',
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
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				use: ['file-loader', 'url-loader']
			}
		]
	},
	devServer: {
		contentBase: path.join(__dirname, 'public/'),
		port: 8080,
		publicPath: 'http://localhost:8080/build/',
		hotOnly: true,
		historyApiFallback: false,
		proxy: {
			"*": "http://[::1]:3000"
		},
	},
	resolve: {
		extensions: ['*', '.js', '.jsx']
	}
}
