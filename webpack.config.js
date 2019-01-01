module.exports = {
	entry: "./app/assets/scripts/app.js",
	output: {
		path: __dirname +"/app/temp/scripts",
		filename: "App.js"
	},



	module:{
		rules: [
			
			{
				loader: 'babel-loader',
				query:{
					presets: ['@babel/preset-env']
				},
				test: /\.js$/,
				exclude: /node_modules/
			}
			
		]
	}

	
}