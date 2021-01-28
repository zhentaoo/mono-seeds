'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var controllers = 'test';

var Test = function () {
  function Test(app) {
    _classCallCheck(this, Test);

    console.log(app);
  }

  _createClass(Test, [{
    key: 'calculate',
    value: function calculate(num) {}
  }, {
    key: 'calculateToday',
    value: function calculateToday() {}
  }, {
    key: 'calculateWeek',
    value: function calculateWeek() {}
  }, {
    key: 'calculateMonth',
    value: function calculateMonth() {}
  }]);

  return Test;
}();

exports.default = Test;