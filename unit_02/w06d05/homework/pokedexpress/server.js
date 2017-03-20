//***************************
// REQUIREMENTS
//***************************
// Set up your express dependencies here:
var express = require('express');
var app = express();
var hbs = require('hbs');
//***************************
// MIDDLEWARE
//***************************
//set up your middleware and view engine here
app.set('view engine', 'hbs');

//***************************
// CONTROLLERS
//***************************
//set up your controller for the `/pokemon` resource
//ex: var pokemonController = require('???')
var pokemonController = require('./controllers/pokemon.js');
app.use('/pokemon', pokemonController);
app.get('/', function(req, res){
	res.send('This is the Pokemon Home Page!');
});

//***************************
// LISTENER
//***************************
// Add a listener for port 3000:
var port = process.env.PORT || 3000;
app.listen(port, function(){
	console.info('Pokemon Server Is Up!');
});
