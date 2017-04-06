var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

var criminalsRoutes = require(__dirname + '/server/routes/criminalsRoutes.js');
app.use('/criminals', criminalsRoutes);

app.listen(process.env.PORT || 3000, function () {
	console.log('Criminals app now listening on port 3000.');
});