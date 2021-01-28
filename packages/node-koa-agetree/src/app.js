if (!global._babelPolyfill) {
  require("babel-core/register");
  require("babel-polyfill");
}

const koa = new(require('koa'))();
const di = new(require('./DI'))();

var assert = require('assert');

// 项目初始化,根据项目配置家在:配置信息／中间件／模块，管理项目
class AgeTree {
  constructor(koa, di) {
    this.di = di;
    this.koa = koa;
    this.config = {};
    this.model = {};

    this.init();
  }

  init() {
    this.getConfig();
    this.useMiddleware();

    this.injectControllers();
    this.injectService();
    this.injectModels();
  }

  // 获取项目配置信息
  getConfig() {
    this.config = require('./common/config');

    assert(this.config.middleware);
    assert(this.config.mongo);
    assert(this.config.server);

    console.log(this.config);
    console.log('get config success');
  }
  injectControllers() {
    for (var k in this.config.controllers) {
      this.di.inject(this.config.modules[k] + "Ctrl", require('./' + this.config.modules[k] + '/controllers'));
    }

    console.log('load controllers success');
  }

  injectService() {
    this.koa.service = require('./common/service');

    for (var k in this.config.modules) {
      this.di.inject(this.config.modules[k] + "Service", require('./' + this.config.modules[k] + '/service'));
    }
    console.log('load service success');
  }

  injectModels() {
    var mongoose = require('mongoose');
    var url = this.config.mongo.host + this.config.mongo.name;

    mongoose.connect(url, function(err) {
      if (err) {
        console.error('connect to %s error: ', url, err.message);
        process.exit(1);
      }
    })

    this.config.modules.forEach(function(el) {
      var schema = require('./' + el + '/models');
    })


    this.di.inject("model", require('./common/models'));
    console.log('load models success');
  }

  useMiddleware() {
    for (var k in this.config.middleware) {
      this.koa.use(require('./common/middleware/' + this.config.middleware[k]));
    }

    console.log('use middleware success');
  }
}

var app = new AgeTree(koa, di);

module.exports = app;
