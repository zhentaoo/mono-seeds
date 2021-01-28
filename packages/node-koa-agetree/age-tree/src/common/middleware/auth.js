'use strict';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; }

var assert = require('assert');

// test not use
var auth = function () {
  var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(ctx, next) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log('start auth');
            console.log(ctx.query);
            console.log(ctx.query.name, ctx.query.name == 'leo');
            console.log(ctx.query.pwd, ctx.query.pwd == '123456');

            if (ctx.query.name == 'leo' && ctx.query.pwd == '123456') {
              console.log('auth success！！！');
            } else {
              console.log('auth failed!!!');
            }

            _context.next = 7;
            return next();

          case 7:
            console.log('end auth');

          case 8:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function auth(_x, _x2) {
    return ref.apply(this, arguments);
  };
}();

module.exports = auth;