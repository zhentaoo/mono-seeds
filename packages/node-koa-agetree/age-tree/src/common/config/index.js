'use strict';

var config = {
  server: require('./server'),
  mongo: require('./mongo'),
  modules: require('./modules'),
  middleware: require('./middleware')
};

module.exports = config;