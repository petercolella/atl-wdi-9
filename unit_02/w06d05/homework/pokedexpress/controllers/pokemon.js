//***************************
// REQUIREMENTS
//***************************
// Set up your express dependency here:
var express = require('express');
// Set express Router to a variable called router:
var router = express.Router();
// Let's export this router file at the bottom of the page:
// (Scroll to bottom to Exports)
var data = require('../models/poke_array.js');
// Require the poke_array.js file here from models.
// Save it to a variable called data:




//***************************
// READ
//***************************
// Note: All the routes below can be accessed at `localhost:3000/pokemon` + `resource`
// Make a GET route '/' that will render an index page of all pokemon images
router.get('/', function(req, res){
	res.render('pokemon/index', {
		pokemon: data
	});
});




// Make a GET route '/index/:index' that will render the Pokemon's show page at that :index
//
// Example: a user goes to 'localhost:3000/pokemon/index/0' in the browser and data for Bulbasaur (the pokemon at index 0) will be displayed.
router.get('/:id', function(req, res){
	var showPokemon = data[req.params.id];

	res.render("pokemon/show.hbs", {
		pokemon: showPokemon
	});
})



// Make a GET route '/new' that will simply render a form to create a new Pokemon
router.get('pokemon/new', function(req, res){
	res.render("pokemon/new.hbs");
});






//***************************
// CREATE
//***************************
//make a POST route '/' to create a New Pokemon
router.post('/', function(req, res){
	var newPokemon = {
		name: req.body.name,
		img: req.body.img,
		type: req.body.type,
		hp: req.body.stats.hp,
		attack: req.body.stats.attack,
		defense: req.body.stats.defense,
		spattatack: req.body.stats.spattatack,
		spdefense: req.body.stats.spdefense,
		speed: req.body.stats.speed,
	};

	data.push(newPokemon);
  	
  	res.redirect('/pokemon');
});

//***************************
// UPDATE
//***************************
router.put('/:id', function(req, res){
	var pokemonToEdit = pokemon[req.params.id];

	pokemonToEdit.name = req.body.name;
	pokemonToEdit.img = req.body.img;
	pokemonToEdit.type = req.body.type;

	res.redirect('/pokemon')
})
//***************************
// DELETE
//***************************
//make a DELETE route '/:index' that will delete the Pokemon at this index.
router.delete('/:id', function(req, res){
	data.splice(req.params.id, 1);
	res.redirect('/pokemon');
})
//==============================
// EDIT
//==============================
router.get('/:id/edit', function(req, res){
	res.render('pokemon/edit', {
		pokemon: {
			name: pokemon[req.params.id].name,
			img: pokemon[req.params.id].images,
			type: pokemon[req.params.id].type,
		}
	});
});

//***************************
// EXPORTS
//***************************
// use module.exports to export router:
// this makes the scripts on this page accessible by other files that "require" this file. Without exporting, the code in here just sits in here, alone.
module.exports = router;