var path = require("path");
var MiniCssExtractPlugin = require("mini-css-extract-plugin");
var webpackMajorVersion = require("webpack/package.json").version.split(".")[0];
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  context: __dirname,
  entry: "./index.js",
  output: {
    path: path.join(__dirname, "dist"),
    publicPath: "",
    filename: "bundle.js",
  },
  module: {
    rules: [
      { test: /\.css$/, use: [MiniCssExtractPlugin.loader, "css-loader"] },
      { test: /\.png$/, type: "asset/resource" },
      { test: /\.ico$/, type: "asset/resource" },
      { test: /\.html$/, loader: "html-loader" },
    ],
  },
  devServer: {
    port: 3000,
    hot: true,
    liveReload: false,
    watchFiles: {
      paths: ['./public/**/*'],
      options: {
        usePolling: false,
      },
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      favicon: "./assets/favicon.ico",
      template: "./public/index.html",
    },{
      filename: "home.html",
      favicon: "./assets/favicon.ico",
      template: "./public/index.html",
    }),
    new MiniCssExtractPlugin({ filename: "styles.css" }),
  ],
};
