var koa = require('koa');
var app = new koa();

app.use(function *(){
  this.body = '<h1>Hello I am server 1111</h1>';
});

console.log('node server 1 listen on 3001');

app.listen(3001);
