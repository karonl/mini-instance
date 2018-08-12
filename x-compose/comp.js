'use strict'
function comp (middles) {
  return function(bus) {
    let num = 0;
    function handle(bus, index) {
      num++;

      if(num - index > 1) throw new Error('next() called more times');
      let fn = middles[index];
      index = index + 1;
      if (!fn) return Promise.resolve();
      try {
        return Promise.resolve(fn(bus, handle.bind(null, bus, index)));
        // 使用 bind 预先绑定参数
      } catch (err) {
        return Promise.reject(err);
      }
    }
    return handle(bus, 0);
  }
}
module.exports = comp;
