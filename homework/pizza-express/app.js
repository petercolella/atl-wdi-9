//require express package
var express = require('express');
//save an express module as 'app'
var app     = express();
var hbs = require('hbs');
app.set("view engine", "hbs");
app.set('views', './views');

app.get('/', function(req, res) {
	var indexPage = 'Welcome to Pizza Express!';
	res.render('index.hbs', {
		data: indexPage
	});
});

app.get('/topping/:type', function(req, res, next) {
	var pizzaTopping = `${req.params.type}`;
    res.render('toppings.hbs', {
    	data: pizzaTopping
    });
});

app.get('/order/:amount/:size', function(req, res, next) {
	var orderAmountSize = `${req.params.amount} ${req.params.size}`;
	var orderSize = `${req.params.size}`;
   res.render('order.hbs', {
   		data: orderAmountSize

   	});
});


// assigning 3000 as our port
var port    = 3000;
// tells the server to listen for requests on port 3000
app.listen(port, function(){
  console.log("==========================")
  console.log('LISTENING ON PORT ' + port);
  console.log("==========================")
});