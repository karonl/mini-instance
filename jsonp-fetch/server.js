const Server = require('http');
Server.createServer(function(req, res) {
  res.setHeader('Content-Type', 'text/javascript');
  res.end("jsonpfetch250({message: 'ok', from: 'server'})");
  // res.end("alert('ok');");
}).listen(12182, function() {
  console.log('http server listening on port 12182');
});