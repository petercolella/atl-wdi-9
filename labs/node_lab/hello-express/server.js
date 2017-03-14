var express = require('express'); // Loading the express module on our server
var app = express(); // Create a new instance of express on our server

var express = require('express'); // Loading express on our server
var app = express(); // install express on our server
var hbs = require('hbs'); // loads handlebars

app.set("view engine", "hbs"); //tells Express what to use for rendering templates

app.use(express.static(__dirname + '/public')); // VERY IMPORTANT!! Make sure to add a '/'

app.get('/', function(req, res) { // when a request comes in at localhost:3000/ it will respond
	res.send('Hello Friend!');
});

app.get('/rihanna', function(req, res) { // when a request comes in at localhost:3000/ it will respond
	console.log(req.route);
	console.log(req.query);
	res.send('Work work work work work');
});

app.get('/greeting', function(req, res) { // when a request comes in at localhost:3000/ it will respond
	// res.send('HEY, WDI 9!');
	console.log(req.query);

    res.render('greeting', {
      data: req.query.saying
    });
});

app.get('/favorite-foods', function(req, res) {
    var favoriteFoods = ["Medium rare rib eye from Pappas Bros Steakhouse", 'Fox Bros BBQ ribs', 'Breakfast at Thumbs Up diner', 'Beignets from Cafe du Monde', 'Pizza slice in New York'];

    res.render('favorite-foods', {
        data: favoriteFoods
    });
});

// app.get("/:name", function(req, res){
//   console.log(req.params);
//   console.log(req.route);
//   console.log(req.query);
//   res.send(`Hello, ${req.params.name}! My name is ${req.query.first_name} ${req.query.last_name}.`);
// });

// app.get("/:food", function(req, res){
//   console.log(req.params);
//   res.send(`I really love ${req.params.food}!`);
// });

app.get('/sightings', function(req, res){
	console.log(req.route);
	console.log(req.query);
	// console.log();
	res.send(`How many ufo sightings you think are in that ${req.query.state}? ${req.query.sights}.`)
})

app.get('/bigfoot', function(req, res){
	console.log(req.route);
	console.log(req.query);
	// console.log();
	if (req.query.blurry == 'true') {
		res.send(`It's not the photographer's fault.`);
	} else if (req.query.blurry == 'false') {
		res.send(`A group of researchers...`);
	}
	// res.send(`How many ufo sightings you think are in that ${req.query.state}? ${req.query.sights}.`)
})

app.get('/hello/:name', function(req, res) {
  res.send({params: req.params, queries: req.query});
});

app.get('/favorite/:noun', function(req, res) {
	if (req.query[req.params.noun]) {
		res.send(`I have a favorite ${req.params.noun}. It is ${req.query[req.params.noun]}.`);
	} else {
		res.send(`I have a favorite ${req.params.noun}.`);
	}
  res.send({params: req.params, queries: req.query});
});

// app.get('/add', function(req, res) {
// 	console.log(req.params);
// 	console.log(req.route);
// 	console.log(req.query);
// 	var total = parseInt(req.query.num1) + parseInt(req.query.num2);
// 	res.send(`${req.query.num1} + ${req.query.num2} = ${total}`);
// });

// app.get('/subtract', function(req, res) {
// 	console.log(req.params);
// 	console.log(req.route);
// 	console.log(req.query);
// 	var total = parseInt(req.query.num1) - parseInt(req.query.num2);
// 	res.send(`${req.query.num1} - ${req.query.num2} = ${total}`);
// });

// app.get('/multiply', function(req, res) {
// 	console.log(req.params);
// 	console.log(req.route);
// 	console.log(req.query);
// 	var total = parseInt(req.query.num1) * parseInt(req.query.num2);
// 	res.send(`${req.query.num1} * ${req.query.num2} = ${total}`);
// });

// app.get('/divide', function(req, res) {
// 	console.log(req.params);
// 	console.log(req.route);
// 	console.log(req.query);
// 	var total = parseInt(req.query.num1) / parseInt(req.query.num2);
// 	res.send(`${req.query.num1} / ${req.query.num2} = ${total}`);
// });

app.get('/math/:operator', function(req, res) {
	console.log(req.params);
	console.log(req.route);
	console.log(req.query);
	if (req.params.operator === 'add') {
		var total = parseInt(req.query.num1) + parseInt(req.query.num2);
		res.send(`${req.query.num1} + ${req.query.num2} = ${total}`);
	} else if (req.params.operator === 'subtract') {
		var total = parseInt(req.query.num1) - parseInt(req.query.num2);
		res.send(`${req.query.num1} - ${req.query.num2} = ${total}`);
	} else if (req.params.operator === 'multiply') {
		var total = parseInt(req.query.num1) * parseInt(req.query.num2);
		res.send(`${req.query.num1} * ${req.query.num2} = ${total}`);
	} else if(req.params.operator === 'divide')  {
		var total = parseInt(req.query.num1) / parseInt(req.query.num2);
		res.send(`${req.query.num1} / ${req.query.num2} = ${total}`);
	}
});

var port = process.env.PORT || 3000; // tells the server where to listen for requests

app.listen(port, function() {
// tells the server where to listen for requests on port 3000

  console.log('hello-express is listening on port 3000');
}); // actualizing the line above