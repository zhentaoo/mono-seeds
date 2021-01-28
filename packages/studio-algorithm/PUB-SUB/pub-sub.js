var Queue = {};

var events = {
  subscribe: function(event, fn) {
    if (Queue[event]) {
      throw new Error('this event has been regist!')
      return;
    }
    Queue[event] = fn;
  },
  publish: function(event) {
    Queue[event]();
  }
}

var p1 =  events.subscribe('click',function() {
  console.log('p1');
});

events.publish('click');
