// const history = require('connect-history-api-fallback');
// //這句程式碼需要在koa-static上面
// app.use(history());
// app.use(require('koa-static')(path.join(__dirname, './public')));

// index：配置預設的index頁面
// rewrites：通過正則配置，配置相關路由
// verbose：日誌選項
// htmlAcceptHeaders：覆蓋Accepts，更改請求的dataType配置
// disableDotRule

// let express = require('express');
// var connect = require('connect');
// var history = require('connect-history-api-fallback');

// let path = require("path"); // path模块包含在express
// let connectHistoryApiFallback = require("connect-history-api-fallback");

// const app = express();
// app.use(history());
// var app = connect().use(history()).listen(3000);
// app.use('/', connectHistoryApiFallback()); // 通过js控制路由
// app.use('/', express.static(path.join(__dirname, './', 'dist'))); // 要访问的文件目录

// 用于模拟测试 api
// app.get("/api/get", (req, res) => res.send("响应返回的数据"));
// app.post("/api/post", (req, res) => res.send("响应返回的数据"));

// const server = app.listen(8080, 'localhost', () => {
//   console.log('服务器的端口为:8080');
// });
