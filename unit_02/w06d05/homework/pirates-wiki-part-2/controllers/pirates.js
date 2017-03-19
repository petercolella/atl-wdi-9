//==============================
// REQUIREMENTS
//==============================

var express = require("express");
var router = express.Router();
var pirates = require('../models/pirates.js');

//==============================
// READ
//==============================
//for root pirate page
router.get('/', function(req, res){
	res.render("pirates/index.hbs", {
		pirates: pirates
	});
});


router.get('/new', function(req, res){
	res.render("pirates/new.hbs");
});


//this is for each pirate page
router.get('/:id', function(req, res){

	//grab the pirate by id
	var showPirate = pirates[req.params.id];

	res.render("pirates/show.hbs", {
		pirate: showPirate
	});
});


//==============================
// CREATE
//==============================

//==============================
// UPDATE
//==============================
router.put('/:id', function(req, res){
	var pirateToEdit = pirates[req.params.id];

	pirateToEdit.name = req.body.name;
	pirateToEdit.birthplace = req.body.birthplace;
	pirateToEdit.death_year = req.body.death_year;
	pirateToEdit.base = req.body.base;
	pirateToEdit.nickname = req.body.nickname;

	res.redirect('/pirates')
})

//==============================
// DESTROY
//==============================
router.delete('/:id', function(req, res){
	pirates.splice(req.params.id, 1);
	res.redirect('/pirates');
})

//==============================
// EDIT
//==============================
router.get('/:id/edit', function(req, res){
	res.render('pirates/edit', {
		pirates: {
			name: pirates[req.params.id].name,
			birthplace: pirates[req.params.id].birthplace,
			death_year: pirates[req.params.id].death_year,
			base: pirates[req.params.id].base,
			nickname: pirates[req.params.id].nickname,
			id: req.params.id
		}
	});
});

//==============================
// EXPORTS
//==============================

module.exports = router;
