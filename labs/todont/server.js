var express = require('express');
var app = express();
var hbs = require('hbs');
app.set('view engine', 'hbs');

var bodyParser = require('body-parser');
var methodOverride = require('method-override');

app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({
    extended: true
}));

var todontsController = require('./controllers/todonts_controller');
app.use('/todonts', todontsController);

var port = process.env.PORT || 3002;
app.listen(port, function() {
	console.info('ToDont Server is up!');
})