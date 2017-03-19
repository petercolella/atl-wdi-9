var express = require('express');
var app = express();


// HELLO WORLD!
// app.get('/home', function(req, res) {
// 	res.send("Hello World!");
// });

// STATIC
// var path = require('path');

// PUG
// app.set('view engine', 'pug')
// app.set('views', process.argv[3]);
// app.get('/home', function(req, res) {
// 	res.render('index', {date: new Date().toDateString()});
// });

// GOOD OLD FORM
// var bodyParser = require('body-parser');
// app.use(bodyParser.urlencoded({extended: false}));
// app.post('/form', function(req, res) {
// 	res.send(req.body.str.split('').reverse().join(''));
// });

// STYLISH CSS
// app.use(require('stylus').middleware(process.argv[3] || 'public'));
// app.use(express.static(process.argv[3] || 'public'));

// PARAM PAM PAM
// app.put('/message/:id', function(req, res) {
// 	var id = req.params.id;
// 	var str = require('crypto')
// 		.createHash('sha1')
// 		.update(new Date().toDateString() + id)
// 		.digest('hex')
// 	res.send(str);
// });

// WHAT'S IN QUERY
app.get('/search', function(req, res) {
	var query = req.query;
	res.send(query);
});

app.listen(process.argv[2] || 3000);