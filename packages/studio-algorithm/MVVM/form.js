function inputing() {
  console.log('inputing');
  console.log(this);
}

var curl = function(url, method) {
  var req = new XMLHttpRequest();
  req.open(method, url, true);
  req.send();
  req.onreadystatechange = function() {
    return req.response;
  }
}

var query = function() {
  console.log('mvvm api ');
  console.log(document.forms['aForm'].name.value);
  console.log(document.forms['aForm'].pwd.value);

  curl('http://127.0.0.1/', 'GET');
  return false;
}
