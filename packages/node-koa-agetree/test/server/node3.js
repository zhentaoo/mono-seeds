var koa = require('koa');
var app = new koa();

app.use(function *(){
  this.body = '<h1>Hello I am server 3333</h1>';
});

console.log('node server 3 listen on 3003');
app.listen(3003);
