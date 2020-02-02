const htmlWebpacklPugin = require("html-webpack-plugin");
const path = require("path");
const glob = require("glob");

module.exports.setMpa = () => {
  const entry = {};
  const htmlwebpackplugins = [];

  const entryFiles = glob.sync(path.join(__dirname, "../src/pages/*/index.js"));

  entryFiles.map((item, index) => {
    const entryFile = entryFiles[index];
    const match = entryFile.match(/pages\/(.*)\/index\.js$/);
    const pageName = match && match[1];
    entry[pageName] = entryFile;

    htmlwebpackplugins.push(
      new htmlWebpacklPugin({
        template: path.join(__dirname, `../src/pages/${pageName}/index.html`),
        filename: `${pageName}.html`,
        chunks: [pageName,"jquery","bootstrap","vendors"],
        // minify: {
        //   // 压缩HTML文件
        //   removeComments: true, // 移除HTML中的注释
        //   collapseWhitespace: true, // 删除空白符与换行符
        //   minifyCSS: true // 压缩内联css
        // }
      })
    );
  });
  return {
    entry,
    htmlwebpackplugins
  };
};
