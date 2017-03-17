var express = require('express');
var router = express.Router();
var data = require('../models/data.js');

router.get('/', function(req, res) {
	res.render('todonts/index', {
		todonts: data.seededToDonts
	});
});

router.get('/new', function(req, res) {
	res.render('todonts/new');
});

router.get('/:id', function(req, res) {
	var todont = data.seededToDonts[req.params.id]
	res.render('todonts/show', {
		todont: todont
	});
});

router.post('/', function(req, res) {
	var newTodont = {
        description: req.body.description,
        urgent: req.body.urgent
    };

    data.seededToDonts.push(newTodont);
    res.redirect('/todonts');
});

router.delete('/:id', function(req, res) {
    data.seededTodonts.splice(req.params.id, 1);
    res.redirect('/todonts');
});

router.get('/todonts/:id/edit', function(req, res) {
	res.render('todonts/edit', {
		todont: {
			description: data.seededToDonts[req.params.id].description,
			urgent: data.seededToDonts[req.params.id].urgent,
			id: req.params.id
		}
	});
});

router.delete('/todonts/:id', function(req, res) {
	res.send('DELETE');
});

module.exports = router;