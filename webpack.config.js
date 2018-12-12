const path = require("path");
const webpack = require("webpack");

module.exports = {
  devServer: {
    port: 9001,
    contentBase: "./public"
  },
  entry: {
    a: ["./app/a.js"]
  },
  mode: "development",
  output: {
    filename: "[name].js",
    path: path.resolve("./dist")
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader"
          }
        ]
      }
    ]
  },
  devtool: "inline-source-map"
};
