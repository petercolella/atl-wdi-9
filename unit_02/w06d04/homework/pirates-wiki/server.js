//your code here
var express = require('express');
var app = express();
var hbs = require('hbs');
app.set('view engine', 'hbs');


var pirateController = require('./controllers/pirates.js');
app.use('/pirates', pirateController);


var port = process.env.PORT || 3000;
app.listen(port, function() {
	console.info('Pirate Server Up');
});