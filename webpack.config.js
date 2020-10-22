const HtmlWebpackPlugin = require("html-webpack-plugin");

const nodeEnv = process.env.NODE_ENV || "development";
const assetPath = process.env.ASSET_PATH || "/";

module.exports = {
  mode: nodeEnv,
  output: {
    filename: "index.js",
    publicPath: assetPath,
  },
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "./index.html",
    }),
  ],
  devServer: {
    historyApiFallback: true,
  },
};
