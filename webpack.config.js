const htmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const path = require("path");
const baseConig = require("./webpack.base.js");
const merge = require("webpack-merge");
const { DllReferencePlugin } = require("webpack");
const AddAssetHtmlWebpackPlugin = require("add-asset-html-webpack-plugin");

const devConfig = {
  mode: "development",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "js/[name]_[hash:6].js"
  },
  devtool: "cheap-module-eval-source-map",
  optimization: {
    usedExports: true // 哪些导出的模块被使用了，再做打包
  },
  watch: true,
  watchOptions: {
    //默认为空，不监听的文件或者目录，支持正则
    ignored: /node_modules/,
    //监听到文件变化后，等300ms再去执行，默认300ms,
    aggregateTimeout: 300,
    //判断文件是否发生变化是通过不停的询问系统指定文件有没有变化，默认每秒问1次
    poll: 1000 //ms
  },
  devServer: {
    contentBase: path.resolve(__dirname, "./dist"),
    open: true,
    port: 8081,
    hot: true,
    hotOnly: true,
    proxy: {
      "/api": {
        target: "http://localhost:9092"
      }
    }
  },

  plugins: [
    new htmlWebpackPlugin({
      title: "京东商城",
      template: "./index.html",
      filename: "index.html"
    }),
    new AddAssetHtmlWebpackPlugin({
      filepath: path.resolve(__dirname, "./dll/react.dll.js") // 对应的 dll 文件路径
    }),
    new DllReferencePlugin({
      manifest: require("./dll/react-manifest.json")
    }),

    new webpack.HotModuleReplacementPlugin()
  ]
};

module.exports = merge(baseConig, devConfig);
