const path = require("path");
const webpack = require("webpack");

module.exports = {
  devServer: {
    compress: true,
    host: "0.0.0.0",
    disableHostCheck: true,
    port: 9001,
    contentBase: "./public",
    watchOptions: {
      poll: 2000,
      aggregateTimeout: 300,
      ignored: /node_modules/
    }
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
            loader: "babel-loader",
            options: {
              cacheDirectory: true
            }
          }
        ]
      }
    ]
  },
  devtool: "inline-source-map"
};
