var express = require('express');
var router = express.Router();

router.get('/:amount/:size', function(req, res, next) {
	var orderAmountSize = `${req.params.amount} ${req.params.size}`;
	var orderSize = `${req.params.size}`;
   res.render('order.hbs', {
   		data: orderAmountSize

   	});
});


module.exports = router;