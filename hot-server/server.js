// 重写 require 实现拦截
require = require('./hot-req');

const http = require('http');
const fna = process.cwd() + '/module.js';
const mod = require(fna);
http.createServer((req, res) => {

  if (req.url === '/') {
    res.end(mod.name + " ok");
  };
  res.end("ok");
}).listen(3002, () => {
  console.log("server is running");
});
