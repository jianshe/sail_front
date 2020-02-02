const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const miniCssExtractPlugin = require("mini-css-extract-plugin");
const HappyPack = require("happypack"); //!优化loader的处理时间！！！！！！！！
var happyThreadPool = HappyPack.ThreadPool({ size: 5 });
const { setMpa } = require("./config/index");

const { entry } = setMpa();

module.exports = {
  entry: entry,
  module: {
    rules: [
      {
        test: /\.css$/,
        include: path.resolve(__dirname, "./src"),
        use: ["happypack/loader?id=css"]
      },
      {
        test: /\.png$/,
        include: path.resolve(__dirname, "./src"),
        use: ["happypack/loader?id=Pics"]
      },
      {
        test: /\.less$/,
        include: path.resolve(__dirname, "./src"),
        // exclude:"./node_modules",
        use: [
          miniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "less-loader"
        ]
      },
      {
        test: /\.scss$/,
        include: path.resolve(__dirname, "./src"),
        use: [
          miniCssExtractPlugin.loader,
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
    alias: {
      react: path.resolve(
        __dirname,
        "./node_modules/react/umd/react.production.min.js"
      ),
      "react-dom": path.resolve(
        __dirname,
        "./node_modules/react-dom/umd/react-dom.production.min.js"
      )
    },
    extensions: ["js"]
  },
  optimization: {
    splitChunks: {
      chunks: "all", // 所有的 chunks 代码公共的部分分离出来成为一个单独的文件,
      name: true,
      cacheGroups: {
        xxx: {
          test: /react|react-dom/,
          name: "react"
        },
        yyy: {
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
    new HappyPack({
      id: "Pics",
      loaders: [
        {
          loader: "file-loader",
          options: {
            name: "images/[name].[ext]"
          }
        }
      ],
      threadPool: happyThreadPool
    }),
    new HappyPack({
      id: "babel",
      loaders: ["babel-loader"],
      threadPool: happyThreadPool
    }),
    new miniCssExtractPlugin({
      filename: "css/[name]_[contenthash:6].css"
    })
  ]
};
