'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _config = require('../config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var url = _config2.default.mongo.host + _config2.default.mongo.name;

console.log(url);

_mongoose2.default.connect(url).then(function (data) {}).catch(function err() {
  throw err;
});

// require('./gold.js');

var models = {
  // gold: mongoose.model('gold')
};

exports.default = models;