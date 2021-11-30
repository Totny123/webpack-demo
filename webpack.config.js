const base = require("./webpack.config.base.js");

module.exports = {
  ...base,
  mode: "development",
  //模块(通常有loader的规则在里面)
  module: {
    //规则
    rules: [
      ...base.module.rules,
      {
        //test属性值是后缀名。使用正则表达式匹配后缀名。
        test: /\.css$/i,
        //从右往左执行。先执行css-loader。再执行style-loader。
        //css-loader会加载css文件，把文件内容读取成字符串。
        //style-loader会将css文件的内容加到head标签里的style标签里面。
        // use: ["style-loader", "css-loader"],
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  //source-map有利于追踪error和warning
  devtool: "inline-source-map",
  //告知dev server,从什么位置查找文件。
  devServer: {
    contentBase: "./dist",
  },
};
