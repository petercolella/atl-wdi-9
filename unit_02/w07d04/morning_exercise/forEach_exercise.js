words = ["Ho", "Chi", "Minh", "City", "was", "once", "known", "as", "Prey", "Nokor"];

words.forEach(function(n, index, words) {
	words[index] = words[index].toUpperCase();
})

console.log(words);

var squareMe = [0, 1, 10, 24, 595]

squareMe.forEach(function(n, index, squareMe) {
	squareMe[index] = n*n;
})

console.log(squareMe);

var numbers = [5,7,9,12,20]
var average = 0;
var  total = 0;

numbers.forEach(function(n, index, numbers) {
	total += numbers[index];
	average = total/numbers.length;
})

console.log(total);
console.log(average);

var products = [
  { name: 'flower vase',   price: 75 },
  { name: 'lamp',  price: 85 },
  { name: 'jar of honey',   price: 95 },
  { name: 'seashell frame', price: 65 },
  { name: 'lumber',  price: 55 }
];

products.forEach(function(n, index, products) {

})

products.forEach(function(n, index, products) {
	
})

products.forEach(function(n, index, products) {
	
})

var myOrder = [
   ["beef", "turkey", "chicken", "veggie"],
   ["cheese", "pickles", "lettuce", "onion"],
   ["coke", "sprite", "iced tea", "water"]
];

myOrder.forEach(function(n, index, myOrder) {
	
})