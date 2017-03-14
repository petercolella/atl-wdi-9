var express = require('express'); // Loading express on our server
var app = express(); // install express on our server
var hbs = require('hbs'); // loads handlebars

app.set("view engine", "hbs"); //tells Express what to use for rendering templates

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) { // when a request comes in at localhost:3000/ it will respond
	res.send('Hello Friend!');
});

// app.get('/shows', function(req, res) {
// 	console.log(req.route);
// 	console.log(req.query);
// 	res.send('Favorite Shows');
// });

app.get('/shows', function(req, res) {
    var favoriteShows = ['Blackmirror', 'Balls Deep', 'Outrageous Acts of Science', 'Noisy', 'Breaking Bad'];

    res.render('shows', {
        data: favoriteShows
    });
});


var port = process.env.PORT || 3002; // tells the server where to listen for requests

app.listen(port, function() {
// tells the server where to listen for requests on port 3000

  console.log('hello-express is listening on port 3002');
}); // actualizing the line above