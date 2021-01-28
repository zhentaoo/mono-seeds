var express = require('express');
var app = express();

app.get('*', function (req, res) {
    res.send('hello world 22222');
    console.log('hello world 22222');
}).listen('3002');
