let request = require('request-promise');
let goldApiUrl = 'https://gold.weicaifu.com/gold/goldTrend_30';
let time = 1000 * 60 * 60 * 2;
import app from '../src/app.js';

let goldModel = app.models.gold;

var requestGold = function() {
  request(goldApiUrl)
    .then(function(data) {
      console.log('request success !!!');
      console.log(data);
      console.log(typeof data);
      data = JSON.parse(data);
      var price = {
        price: data.body.results[0].price
      };
      return goldModel.create(price)
    })
    .then(function(data) {
      console.log(data);
    })
    .catch(function(err) {
      console.log(err, 'boom you need find other api!');
    });
};
requestGold();

setInterval(requestGold, time);
