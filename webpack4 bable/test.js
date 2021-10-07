"use strict";

var message = 'hello world';
var names = ['chan', 'sdf', 'xcvb'];
names.forEach(function (item) {
  return console.log(item);
}); // 命令行的话这么用 npx babel demo.js --out-file test.js --plugins=@babel/plugin-transform-arrow-functions
// 完整 npx babel demo.js --out-file test.js --plugins=@babel/plugin-transform-arrow-functions,@babel/plugin-transform-block-scoping
