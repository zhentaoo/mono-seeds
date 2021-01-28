var mongoose = require('mongoose');
var moment = require('moment');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  price: String,
  time: {
    year: {
      type: String,
      default: moment()
    },
    month: {
      type: String
    },
    week: {
      type: String
    }
  }
});

module.exports = userSchema;
