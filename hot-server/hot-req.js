const oldreq = require;
const fs = require('fs');

function extend(parent, child) {
  child = child || {};
  for (let i in parent) {
    if (parent.hasOwnProperty(i)) {
      child[i] = parent[i];
    }
  }
  return child;
}

let urlpath = [];
require = function (path) {
  if (urlpath[path]) {
    let tmp = oldreq(path);
    extend(tmp, urlpath[path]); // 复制
  } else {
    urlpath[path] = oldreq(path);
  }
  return urlpath[path];
}
extend(oldreq, require);

fs.watch('.', function (event, filename) {
  const path = process.cwd() + '/' + filename;
  if (event == 'change' && urlpath[path]) {
    console.log("reload", path);
    cleanCache(path);
    require(path);
  }
});

function cleanCache(modulePath) {
  let module = require.cache[modulePath];
  if (module && module.parent) {
    module.parent.children.splice(module.parent.children.indexOf(module), 1);
  }
  require.cache[modulePath] = null;
}

module.exports = require;
