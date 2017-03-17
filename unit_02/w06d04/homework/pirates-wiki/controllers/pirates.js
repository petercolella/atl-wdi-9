//your code below
var express = require('express');
var router = express.Router();
var piratesArray = require('../models/pirates.js');

router.get('/', function(req, res) {
	res.render('pirates/index', {
		pirates: piratesArray
	});
});

// router.post('/', function(req, res) {

// })

module.exports = router;