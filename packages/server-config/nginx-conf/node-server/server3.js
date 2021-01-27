var express = require('express');
var app = express();

app.get('*', function (req, res) {
    res.send('hello world 33333');
    console.log('hello world 333333');
}).listen('3003');
