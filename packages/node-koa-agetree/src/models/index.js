/**
 * Schema生成Model，Model创造Entity，
 * Model和Entity都可对数据库操作造成影响，
 * 但Model比Entity更具操作性。
 * */

/*
 var tank = mongoose.model('Tank', yourSchema);

 tank.create({ size: 'small' }, function (err, small) {
 if (err) return handleError(err);
 // saved!
 })

 tank.remove({ size: 'large' }, function (err) {
 if (err) return handleError(err);
 // removed!
 });

 tank.findOneAndUpdate(query, { name: 'jason borne' }, options, callback)

 tank.findOne({ name: 'borne' }, function (err, doc) {
 if (err) ..
 doc.name = 'jason borne';
 doc.save(callback);
 })
 */

var mongoose = require('mongoose');
var config = require('../config');

var url = config.mongo.host + config.mongo.name;
var schemas = {};

console.log(url);

mongoose.connect(url, function(err) {
  if (err) {
    console.error('connect to %s error: ', url, err.message);
    process.exit(1);
  }
});

config.modules.forEach(function(el) {
  var schema = require('../../' + el + '/models');
  for (var k in schema) {
    // schemas[k] = schema[k];
    module.exports[k] = mongoose.model(k, schema[k]);
  }
});

// console.log(schemas);

// exports.Gold =mongoose.model('day', daySchema);
