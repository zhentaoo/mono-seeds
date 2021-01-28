"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

if (!global._babelPolyfill) {
  require("babel-core/register");
  require("babel-polyfill");
}

var koa = new (require('koa'))();
var assert = require('assert');

// 项目初始化,根据项目配置家在:配置信息／中间件／模块，管理项目

var AgeTree = function () {
  function AgeTree(koa) {
    _classCallCheck(this, AgeTree);

    this.PATH = __dirname;

    this.koa = koa;
    this.koa.config = {};
    this.koa.models = {};
    this.koa.controllers = {};
    this.koa.service = {};

    this.config = {};
    this.init();
    return this.koa;
  }

  _createClass(AgeTree, [{
    key: "init",
    value: function init() {
      this.getConfig();

      this.useMiddleware();
      this.useModule();

      this.loadControllers();
      // this.loadModels();
      this.loadService();
    }

    // 获取项目配置信息

  }, {
    key: "getConfig",
    value: function getConfig() {
      this.config = require('./common/config');

      assert(this.config.middleware);
      assert(this.config.modules);
      assert(this.config.mongo);
      assert(this.config.server);

      this.koa.config.server = this.config.server;
      this.koa.config.mongo = this.config.mongo;

      console.log('get config success');
    }

    // 根据./common/config/ 配置，加载koa中间件

  }, {
    key: "useMiddleware",
    value: function useMiddleware() {
      for (var k in this.config.middleware) {
        this.koa.use(require(this.PATH + '/common/middleware/' + this.config.middleware[k]));
      }

      console.log('use middleware success');
    }
  }, {
    key: "useModule",
    value: function useModule() {
      for (var k in this.config.modules) {
        this.koa.use(require("./" + this.config.modules[k]));
      }

      console.log('use modules success');
    }

    // 根据配置信息，挂载项目中的ctrl，model，service

  }, {
    key: "loadControllers",
    value: function loadControllers() {
      for (var k in this.config.modules) {
        this.koa.controllers[this.config.modules[k]] = require('./' + this.config.modules[k] + '/controllers');
      }
      console.log('load controllers success');
    }

    // loadModels() {
    //   for (var k in this.config.modules) {
    //     this.koa.models[this.config.modules[k]] = require('./' + this.config.modules[k] + '/models');
    //   }
    //   console.log('load models success');
    // }

  }, {
    key: "loadService",
    value: function loadService() {
      this.koa.service = require('./common/service');

      for (var k in this.config.modules) {
        this.koa.service[this.config.modules[k]] = require('./' + this.config.modules[k] + '/service');
      }
      console.log('load service success');
    }
  }]);

  return AgeTree;
}();

var app = new AgeTree(koa);

module.exports = app;