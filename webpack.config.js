var path = require('path');
var webpack = require("webpack");

module.exports = {
  entry: './app/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve:{
    modules: [
      path.join(__dirname, "app"),
      "node_modules"
    ]
  },
  devtool: 'source-map',
  devServer: {
    contentBase: [path.join(__dirname, "public"), path.join(__dirname, "dist")],
    compress: true,
    port: 9000
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/
      },
      { test: require.resolve("react"), loader: "expose-loader?React" },
      { test: require.resolve("react-dom"), loader: "expose-loader?ReactDOM" }
    ]
  }
};


