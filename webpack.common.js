/**
 * Webpack config
 * Shared between development and production
 * @see webpack.dev.js and webpack.prod.js
 */

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
const SpriteLoaderPlugin = require("svg-sprite-loader/plugin");

module.exports = {
    mode:
        process.env.ENVIRONMENT === "production" ? "production" : "development",
    devtool:
        process.env.ENVIRONMENT === "production"
            ? "source-map"
            : "inline-source-map",
    entry: {
    	admin: "./assets/dev/js/admin.js",
    	blocks: "./assets/dev/js/blocks.js",
        index: "./assets/dev/js/index.js",
    },
    output: {
        filename: "js/[name].js",
        path: path.resolve(__dirname, "./assets/dist/"),
        publicPath: "/wp-content/themes/bfbh-theme/assets/dist/",
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "postcss-loader",
                ],
            },
            {
                test: /\.(jpe?g|png|gif|ico|svg)$/i,
                type: "asset/resource",
                exclude: path.resolve(__dirname, "./assets/dev/svg-sprite"),                
                generator: {
                    filename: "img/[name][ext]",
                },
            },
            {
                test: /\.svg$/,
                loader: "svg-sprite-loader",
                include: path.resolve(__dirname, "./assets/dev/svg-sprite"),
                options: {
                    extract: true,
                    spriteFilename: "img/icons.svg",
                },
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: "asset/resource",
                generator: {
                    filename: "fonts/[name][ext]",
                },
            },
        ],
    },
    externals: { 
        '@wordpress/blocks': 'wp.blocks',
        '@wordpress/block-editor': 'wp.blockEditor',
        '@wordpress/components': 'wp.components',
        '@wordpress/hooks': 'wp.hooks',
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "css/[name].css",
        }),
		new SpriteLoaderPlugin({
			plainSprite: true
		}),      
    ],
};
