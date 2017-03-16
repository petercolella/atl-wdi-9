var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');


app.use(require('stylus').middleware(process.argv[3] || 'public'));
app.use(express.static(process.argv[3] || 'public'));
app.use(bodyParser.urlencoded({extended: false}));


app.post('/form', function(req, res) {
	res.send(req.body.str.split('').reverse().join(''));
});


app.set('view engine', 'pug')
app.set('views', process.argv[3]);
app.get('/home', function(req, res) {
	res.render('index', {date: new Date().toDateString()});
});


app.get('/home', function(req, res) {
	res.send("Hello World!");
});


app.listen(process.argv[2]);