import app from '../../src/app.js';

app.models.gold.create({
    price: 10,
    test:11
  })
  .then(function(data) {
    console.log('test');
    console.log(data);
  })
  .catch(function (err) {
    console.log(err);
  });
