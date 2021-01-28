var config = {
  server: require('./server'),
  mongo: require('./mongo'),
  middleware: require('./middleware'),
  controllers: require('./controllers'),
  models: require('./models'),
  service: require('./service')
};

module.exports = config;
