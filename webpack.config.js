//导入node的path模块
let path = require("path");

module.exports = {
  mode: "development",
  //打包入口(通常是代码的入口，比如Vue的main.js)
  entry: "./src/index.js",
  //打包出口(即配置打包后文件夹的名字和打包后文件的名字)
  output: {
    //path模块读取路径
    path: path.resolve(__dirname, "dist"),
    //设置文件名
    filename: "index.[contenthash].js",
  },
};
