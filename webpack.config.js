const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
    publicPath: "/weather-forecast/", // correct for GitHub Pages
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
      favicon: "./src/assets/rain.png",
    }),
  ],
  mode: "development", // or 'production'

  // Ensure devServer is inside the module.exports object
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    port: 8080,
    open: true, // optional: opens the browser automatically
    historyApiFallback: true, // for single-page apps (routes fallback to index.html)
  },
};
