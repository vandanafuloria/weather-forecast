const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true, // cleans old files from /dist on each build
  },
  module: {
    rules: [
      // CSS Loader
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      // Image Loader (Asset Modules - Webpack 5)
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: "asset/resource",
      },
      // HTML Loader
      {
        test: /\.html$/,
        use: ["html-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
  mode: "development", // or 'production'
};
