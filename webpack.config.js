const path = require('path')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist')
    }
  },
  entry: {
    index: "./src/index.js",
  },
  mode: "production",
  plugins: [
    new MiniCssExtractPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      },
      {
        test: /\.jss$/,
        use: ["babel-loader"]
      },
    ],
  },
  output: {
    filename: '[name].min.js'
  }
};