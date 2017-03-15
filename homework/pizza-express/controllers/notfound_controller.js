var express = require('express');
var router = express.Router();

router.get('*', function(req, res, next) {
	var notfound = `${'404 Page Not Found'}`;
    res.render('notfound.hbs', {
    	data: notfound
    });
});

module.exports = router;