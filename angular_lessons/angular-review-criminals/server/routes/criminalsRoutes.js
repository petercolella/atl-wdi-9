var express = require('express');
var router = express.Router();

var seeds = [
    {
        _id: 21413589023237590275,
        criminalName: 'Pookie',
        city: 'Charles house'
    },
    {
        _id: 30295702375928375,
        criminalName: 'shadowDom',
        city: 'noDavidVille'
    },
    {
        _id: 9132874923785,
        criminalName: 'Kush',
        city: 'Atlanta'
    }
];

router.get('/', function(req, res) {
	//res.send('I am criminals');
	res.json({criminals: seeds });
});

module.exports = router;