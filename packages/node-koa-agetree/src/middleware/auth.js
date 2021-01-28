var assert = require('assert');

// test not use
let auth = async function(ctx, next) {
  console.log('start auth');
  console.log(ctx.query);
  console.log(ctx.query.name, ctx.query.name == 'leo');
  console.log(ctx.query.pwd, ctx.query.pwd == '123456');

  if (ctx.query.name == 'leo' && ctx.query.pwd == '123456') {
    console.log('auth success！！！');
  } else {
    console.log('auth failed!!!');
  }

  await next();
  console.log('end auth');
}

module.exports = auth;
