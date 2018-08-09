const http = require('http');
const https = require('https');

function Server(option, requestListener) {
  if (typeof option == 'object') {
    https.Server.call(this, option, requestListener);

    //处理机制
    this._tlsHandler = this._events.connection;
    this._httpSocketHandler = http._connectionListener;

    //替换监听器
    this.removeListener('connection', this._tlsHandler);
    this.on('connection', this.connectionListener); // 加入中间处理机制

    this.allowHalfOpen = true;
    this.httpAllowHalfOpen = false;
  } else throw new Error('wrong option');
}
Server.prototype = Object.create(https.Server.prototype);

Server.prototype.connectionListener = function (socket) {
  const self = this;
  let data;
  data = socket.read(1); // 读一个数据进行判断
  if (data === null) {
    socket.once('readable', function () {
      self.connectionListener(socket);
    });
  } else {
    const firstByte = data[0];
    socket.unshift(data); // 放回去
    if (firstByte === 22) {
      this._tlsHandler(socket);
    } else if (32 < firstByte && firstByte < 127) {
      this._httpSocketHandler(socket);
    } else {
      console.log('unknow protocol'); // 其他协议
    }
  }
};
module.exports = Server;
