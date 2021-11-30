//导入node的path模块
const path = require("path");
//导入插件
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  //打包入口(通常是代码的入口，比如Vue的main.js)
  entry: "./src/main.js",
  //打包出口(即配置打包后文件夹的名字和打包后文件的名字)
  output: {
    //path模块读取路径
    path: path.resolve(__dirname, "dist"),
    //设置文件名
    filename: "main.[contenthash].js",
  },
  //插件
  plugins: [
    new HtmlWebpackPlugin({
      //html文件的标题(无模板的情况下才生效。有模板的情况下，可以在模板写表达式进行读取title属性值)
      title: "刘俊峰",
      //打包后html文件的目录及文件名(都是在dist目录下的)
      filename: "index.html",
      //html模板，以模板为标准进行打包(会将output导出的js文件引入)
      template: "./src/assets/index.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {},
          },
        ],
      },
      {
        test: /\.less$/i,
        loader: [
          // compiles Less to CSS
          "style-loader",
          "css-loader",
          "less-loader",
        ],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // 将 JS 字符串生成为 style 节点
          "style-loader",
          // 将 CSS 转化成 CommonJS 模块
          "css-loader",
          // 将 Sass 编译成 CSS
          {
            loader: "sass-loader",
            options: {
              // `dart-sass` 是首选
              implementation: require("dart-sass"),
            },
          },
        ],
      },
    ],
  },
};
