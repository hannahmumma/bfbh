/**
 * Webpack config
 * For development
 * @see webpack.common.js
 */

const { merge } = require("webpack-merge");
const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");
const common = require("./webpack.common");

module.exports = merge(common, {
	devServer: {
		allowedHosts: "all",
		client: {
			webSocketURL: {
				hostname: "localhost",
				pathname: "/ws",
				port: 8080,
				protocol: "ws",
			},
		},
		devMiddleware: {
			publicPath: "/dist/",
			writeToDisk: true,
		},
		hot: "only",
		static: {
			directory: path.resolve(__dirname, "./views"),
			serveIndex: true,
			staticOptions: {},
			watch: {
				aggregateTimeout: 3000,
				ignored: /node_modules/,
				poll: 200,
				watchContentBase: true,
				writeToDisk: true,
			},
		},
	},
	optimization: {
		minimize: false,
		minimizer: [
			new TerserPlugin({
				terserOptions: {
					format: {
						comments: true,
					},
				},
				extractComments: false,
				parallel: true,
			}),
		],
	},
});
