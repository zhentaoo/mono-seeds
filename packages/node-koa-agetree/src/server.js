var app = require('./app.js');

// 项目启动，监听端口
app.listen(app.config.server.port, function(err, data) {
  console.log('server start at http://127.0.0.1:'+app.config.server.port);
});
