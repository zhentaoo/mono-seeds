module.exports = class Gold {
  constructor(app) {
    console.log(app);
  }
  static setGoldPrice(ctx, next) {
    console.log(ctx);
    ctx.body = {
      'leo': 'setGoldPrice'
    };
    console.log(app.models);
    app.models.user.create({
      'price': 'sdfs'
    })
  }

  getGoldPrice() {

  }

  calculate(num) {

  }

  calculateToday() {

  }

  calculateWeek() {

  }

  calculateMonth() {

  }

}
