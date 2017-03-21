console.log('tamagotchi file is loaded');

//your constructor function here
var Tamagotchi = function(name, creatureType){
	this.name = name;
	this.creatureType = creatureType;
	this.foodInTummy = 10;
	this.restedness = 10;
	this.health = 10;
	this.cry = function(){
		this.foodInTummy--;
		console.log(this.name + "'s new value of food in tummy: " + this.foodInTummy);
		console.log('WAHH!!!');
	}
}

//create new Tamagotchis
// var madeTamagotchi1 = new Tamagotchi();
// var madeTamagotchi2 = new Tamagotchi();
var madeTamagotchi3 = new Tamagotchi('Bashful', 'basidiomycota');
var madeTamagotchi4 = new Tamagotchi('Doc', 'zygomycota');

// madeTamagotchi1.cry();
// madeTamagotchi2.cry();
madeTamagotchi3.cry();
madeTamagotchi4.cry();

//test out your Tamagotchies below via console.logs
// console.log('madeTamagotchi1');
// console.log('madeTamagotchi2');
console.log('madeTamagotchi3');
console.log('madeTamagotchi4');