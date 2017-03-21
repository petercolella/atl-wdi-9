console.log('tamagotchi file is loaded');

//your constructor function here
var Tamagotchi = function(){
	this.foodInTummy = 10;
	this.restedness = 10;
	this.health = 10;
	this.cry = function(){
		this.foodInTummy--;
		console.log('New value of food in tummy: ' + this.foodInTummy);
		console.log('WAHH!!!');
	}
}

//create new Tamagotchis
var madeTamagotchi1 = new Tamagotchi();
var madeTamagotchi2 = new Tamagotchi();

madeTamagotchi1.cry();
madeTamagotchi2.cry();

//test out your Tamagotchies below via console.logs
console.log('madeTamagotchi1');
console.log('madeTamagotchi2');