const Server = require('./https_http_server');
const tls = require('tls');
const fs = require('fs');
new Server({
  SNICallback: (domain, cb) => {
    console.log(domain);
    cb(null, tls.createSecureContext({
      key: fs.readFileSync('server.key'),
      cert: fs.readFileSync('server.crt')
    }));
  }
},function(req, res) {
  res.end("weclome to use http&https");
}).listen(12181, function() {
  console.log('http & https server listening on port 12181');
});