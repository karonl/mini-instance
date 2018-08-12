
const comp = require('./comp');

const ctx = {ctx: 100, name: 'karonl'};
const middleware = [];

middleware.push((bus, next) => {
  console.log(bus, "1");
  next();
});
middleware.push(async (bus, next) => {
  console.log(bus, "2");
  bus.name = 'github'; // 更改贯穿整个流程的上下文内容
  next();
});
middleware.push(async (bus, next) => {
  console.log(bus, "3");
  next();
});

const list = comp(middleware);
list(ctx).then(() => {
  console.log("finish");
}).catch(err => {
  console.log("err");
});
  

