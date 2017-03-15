var express = require('express');
var router = express.Router();

router.get('/:type', function(req, res, next) {
	var pizzaTopping = `${req.params.type}`;
    res.render('toppings.hbs', {
    	data: pizzaTopping
    });
});


module.exports = router;