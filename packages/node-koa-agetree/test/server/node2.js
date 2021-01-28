var koa = require('koa');
var app = new koa();

app.use(function *(){
  this.body = '<h1>Hello I am server 2222</h1>';
});

console.log('node server 2 listen on 3002');

app.listen(3002);
