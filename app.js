'use strict';

var express = require('express'),
    app = express();

app.set('views', 'views');
app.set('view engine', 'jade');

app.get('/', function(req, res) {
    res.render('home', {
  });
});

app.listen(8081);
module.exports.getApp = app;