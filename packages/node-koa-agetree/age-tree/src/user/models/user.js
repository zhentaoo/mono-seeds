'use strict';

var mongoose = require('mongoose');
var moment = require('moment');

var goldSchema = new mongoose.Schema({
  price: String,
  time: {
    year: {
      type: Number,
      default: moment()
    },
    month: {
      type: String,
      default: default
    },
    week: {
      type: String,
      default: default
    },
    type: String,
    default: time
  }
});

mongoose.model('gold', goldSchema);