'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _app = require('../src/app.js');

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var request = require('request-promise');
var goldApiUrl = 'https://gold.weicaifu.com/gold/goldTrend_30';
var time = 1000 * 60 * 60 * 2;


var goldModel = _app2.default.models.gold;

var requestGold = function requestGold() {
  request(goldApiUrl).then(function (data) {
    console.log('request success !!!');
    console.log(data);
    console.log(typeof data === 'undefined' ? 'undefined' : _typeof(data));
    data = JSON.parse(data);
    var price = {
      price: data.body.results[0].price
    };
    return goldModel.create(price);
  }).then(function (data) {
    console.log(data);
  }).catch(function (err) {
    console.log(err, 'boom you need find other api!');
  });
};
requestGold();

setInterval(requestGold, time);