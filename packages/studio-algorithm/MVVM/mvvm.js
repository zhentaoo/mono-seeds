(function() {
  var render = function() {
    console.log('render');
  }

  var select = function() {
    console.log('select');
  }

  var compiler = function() {
    console.log('compiler');
  }

  var parser = function() {
    console.log('parser');
  }

  var observer = function() {
    console.log('observer');
  }

  var watcher = function() {
    console.log('watcher');
  }

  var mvvm = 'leo';
  window.mvvm = mvvm;
})()
