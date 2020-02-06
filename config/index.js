const htmlWebpacklPugin = require("html-webpack-plugin");
const path = require("path");
const glob = require("glob");

module.exports.setMpa = () => {
  const entry = {};
  const htmlwebpackplugins = [];

  const entryFiles = glob.sync(path.join(__dirname, "../src/pages/*/index.js"));

  // const htmlPlugin = Object.keys(entryFiles).map(index => {
  //   const entryFile = entryFiles[index];
  //   const match = entryFile.match(/pages\/(.*)\/index\.js$/);
  //   const pageName = match && match[1];
  //   entry[pageName] = entryFile;
  //   return new htmlWebpacklPugin(Object.assign({}, {
  //       inject: true,
  //       template:
  //       path.join(__dirname, `../src/pages/${pageName}/index.html`),

  //     filename: `${pageName}.html`,
  //     chunks: [pageName, "jquery", "bootstrap", "vendors"],
  //       title: `${name} html`,

  //     }, isEnvProduction
  //       ? {
  //         minify: {
  //           removeComments: true,
  //           collapseWhitespace: true,
  //           removeRedundantAttributes: true,
  //           useShortDoctype: true,
  //           removeEmptyAttributes: true,
  //           removeStyleLinkTypeAttributes: true,
  //           keepClosingSlash: true,
  //           minifyJS: true,
  //           minifyCSS: true,
  //           minifyURLs: true
  //         }
  //       }
  //       : undefined));
  // });

  entryFiles.map((item, index) => {
    const entryFile = entryFiles[index];
    const match = entryFile.match(/pages\/(.*)\/index\.js$/);
    const pageName = match && match[1];
    entry[pageName] = entryFile;

    htmlwebpackplugins.push(
      new htmlWebpacklPugin({
        template:
          path.join(__dirname, `../src/pages/${pageName}/index.html`),

        filename: `${pageName}.html`,
        // chunks: [pageName],
        chunks: [pageName, "jquery", "bootstrap","swiper", "vendors~" + pageName],
        minify: {
          // 压缩HTML文件
          removeComments: true, // 移除HTML中的注释
          collapseWhitespace: true, // 删除空白符与换行符
          minifyCSS: true // 压缩内联css
        }
      })
    );
  });
  return {
    entry,
    htmlwebpackplugins
  };
};
