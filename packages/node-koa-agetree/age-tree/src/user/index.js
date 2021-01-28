'use strict';

var router = require('koa-router')();

router.get('/test', function (ctx, next) {
  ctx.body = 'test route';
});

module.exports = router.routes();