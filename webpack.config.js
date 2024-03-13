const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    // Set the single-spa config as the project entry point
    "single-spa.config": "./single-spa.config.js",
  },
  output: {
    publicPath: "/dist",
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        // Webpack style loader added so we can use materialize
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.js$/,
        exclude: [path.resolve(__dirname, "node_modules")],
        loader: "babel-loader",
      },
      {
        // This plugin will allow us to use AngularJS HTML templates
        test: /\.html$/,
        exclude: /node_modules/,
        loader: "html-loader",
      },
    ],
  }, 
  resolve: {
    modules: [path.resolve(__dirname, "node_modules")],
  },
  plugins: [
    // A webpack plugin to remove/clean the output folder before building
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
			template: './index.html',
			filename: 'index.html',
			minify: {
				collapseWhitespace: true, // <-- Enable HTML minification
				removeComments: true,
				removeRedundantAttributes: true,
				removeScriptTypeAttributes: true,
				removeStyleLinkTypeAttributes: true,
				useShortDoctype: true
			}
		}),
  ],
  devtool: "source-map",
  externals: [],
  devServer: {  
    static: path.join(__dirname, '/dist'), 
    devMiddleware: {
      writeToDisk: true,
      mimeTypes: {
        "application/x-javascript": ["js"],
        "application/x-typescript": ["ts", "tsx"],
        "video/mp2t": ["mp2t"],
        "text/html": ["text/html"],
      }
    },  
    compress: true,
    port: 4010,  
    open: false, 
    hot: false,
    client :{
      progress: true
    },
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization",
      "X-Content-Type-Options": "nosniff",
      "MIME-Type": [ "text/html", "application/x-javascript", "text/javascript", "text/x-typescript","application/x-typescript", "video/mp2t"],
      },
  },
};