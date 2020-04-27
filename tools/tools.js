const express = require('express');
const app = express();
global.app = app;
global.buckName = 'tang-tools'
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

// 支持 post 请求在 req.body 中获取 request payload 的参数
app.use(bodyParser.json());

// 解析 application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// 支持前端调取接口时，后端能拿到浏览器的cookie
app.use(cookieParser('admin')); // cookieParser 加密 token

// express 静态托管资源
app.use(express.static('./'));

// 全局拦截所有请求，做相关的操作
app.all('*', (req, res, next) => {
  if (req.method === 'OPTIONS') {
    return false;
  }
  
  // 支持跨域
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Methods', '*');
  res.header('Content-Type', 'application/json;charset=utf-8');

  /**
   * 获取浏览器 token，每次调取接口时重置浏览器的 token 时效
   * 除登录接口外
   */
  const { token } = req.signedCookies;
  if (token) {
    res.cookie('token', token, {
      maxAge: 1000 * 60 * 60 * 2,
      signed: true
    });
  }
  
  next();
});

require('./upload')

// 应用监听端口
const PORT = 8000
app.listen(PORT, () => {
  console.log(`server is running at http://127.0.0.1:${PORT}/`);
});
