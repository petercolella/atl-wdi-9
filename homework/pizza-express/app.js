//require express package
var express = require('express');
//save an express module as 'app'
var app = express();
var hbs = require('hbs');
app.set("view engine", "hbs");
app.set('views', './views');

var orderController = require('./controllers/order_controller.js');
var toppingsController = require('./controllers/toppings_controller.js');
var notfoundController = require('./controllers/notfound_controller.js');

app.get('/', function(req, res) {
	var indexPage = 'Welcome to Pizza Express!';
	res.render('index.hbs', {
		data: indexPage
	});
});

app.use('/order', orderController);
app.use('/topping', toppingsController);
app.use('*', notfoundController);

// app.get('/topping/:type', function(req, res, next) {
// 	var pizzaTopping = `${req.params.type}`;
//     res.render('toppings.hbs', {
//     	data: pizzaTopping
//     });
// });

// app.get('/order/:amount/:size', function(req, res, next) {
// 	var orderAmountSize = `${req.params.amount} ${req.params.size}`;
// 	var orderSize = `${req.params.size}`;
//    res.render('order.hbs', {
//    		data: orderAmountSize

//    	});
// });


// assigning 3000 as our port
var port    = 3000;
// tells the server to listen for requests on port 3000
app.listen(port, function(){
  console.log("==========================")
  console.log('LISTENING ON PORT ' + port);
  console.log("==========================")
});