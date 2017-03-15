//*************************
// Problem 1:
// Barrels O' RUM

var barrels = function(small, large, total){
  var smallBarrel = 60;
  var largeBarrel = (total - (small * smallBarrel)) / large;

  var small = 2;
  var total = 825;
  var largeBarrel = (total - (small * smallBarrel))/large;
  


return largeBarrel;
};

barrels(2,3,825);

//*************************
// Problem 2:
// Sailing the Seas

var shipFuelCost = function(fuelPrice, milesPerGallon){
	var circumference = 24901;
	var gallons = circumference/milesPerGallon;
	var totalCost = fuelPrice * gallons;
	return totalCost;
  //your code here
};

//*************************
// Problem 3:
// GROG

var calcFruitJuice = function(a, b, c, d){
	var gallonsCostcoPureJuice = a * (.01 * b);
	var gallonsKirklandPureJuice = c * (.01 * d);
	var gallonsTotalPureJuice = gallonsCostcoPureJuice + gallonsKirklandPureJuice;
	var gallonsTotalFruitPunch = a + c;
	var percentTotalPureJuice = gallonsTotalPureJuice/gallonsTotalFruitPunch;
	return percentTotalPureJuice;
  //your code here
};

calcFruitJuice(3,20,2,55);

//DO NOT EDIT BELOW THIS LINE//
module.exports = {
  barrels: barrels,
  shipFuelCost: shipFuelCost,
  calcFruitJuice: calcFruitJuice
};
