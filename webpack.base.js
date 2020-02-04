const path = require("path");
const webpack = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HappyPack = require("happypack"); //!优化loader的处理时间！！！！！！！！
var happyThreadPool = HappyPack.ThreadPool({ size: 5 });
const { setMpa } = require("./config/index");

const { entry } = setMpa();

module.exports = {
  entry: entry,
  module: {
    rules: [
      {
        test: require.resolve("jquery"),
        loader: "expose-loader?$!expose-loader?jQuery"
      },
      // {
      //   test: /\.html$/,
      //   use: [
      //     {
      //       loader: "html-loader",
      //       options: {
      //         arrts: ["img:src", "img:data-src"],
      //         minimize: false //是否压缩html
      //       }
      //     }
      //   ]
      // },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: "../"
            }
          },
          "css-loader"
        ]
      },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file-loader" },
      { test: /\.(woff|woff2)$/, loader: "url-loader?prefix=font/&limit=5000" },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url-loader?limit=10000&mimetype=application/octet-stream"
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url-loader?limit=10000&mimetype=image/svg+xml"
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        loader: "url-loader",
        options: {
          limit: 8192,
          name: "img/[name].[hash:7].[ext]"
        }
      },
      {
        test: /\.less$/,
        include: path.resolve(__dirname, "./src"),
        // exclude:"./node_modules",
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: "../"
            }
          },
          "css-loader",
          "postcss-loader",
          "less-loader"
        ]
      },
      {
        test: /\.scss$/,
        include: path.resolve(__dirname, "./src"),
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: "../"
            }
          },
          "css-loader",
          "postcss-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.js$/,
        include: path.resolve(__dirname, "./src"),
        use: ["happypack/loader?id=babel"]
      }
    ]
  },
  resolve: {
    modules: [path.resolve(__dirname, "./node_modules")],
    extensions: [".js"]
  },
  optimization: {
    splitChunks: {
      chunks: "all", // 所有的 chunks 代码公共的部分分离出来成为一个单独的文件,
      name: true,
      cacheGroups: {
        jquery: {
          test: /jquery|jquery.min/,
          name: "jquery"
        },
        bootstrap: {
          test: /bootstrap|bootstrap.min|bootstrap.css/,
          name: "bootstrap"
        },
        lodash: {
          test: /lodash/,
          name: "lodash"
        }
      }
    }
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HappyPack({
      id: "css",
      loaders: ["style-loader", "css-loader"],
      threadPool: happyThreadPool
    }),
    // new HappyPack({
    //   id: "Pics",
    //   loaders: [
    //     {
    //       loader: "file-loader",
    //       options: {
    //         limit:500,
    //         name: "images/[name].[ext]"
    //       }
    //     }
    //   ],
    //   threadPool: happyThreadPool
    // }),
    new HappyPack({
      id: "babel",
      loaders: ["babel-loader"],
      threadPool: happyThreadPool
    }),
    new MiniCssExtractPlugin({
      filename: "css/[name]_[contenthash:6].css"
    }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.$": "jquery",
      "window.jQuery": "jquery"
    })
  ]
};
