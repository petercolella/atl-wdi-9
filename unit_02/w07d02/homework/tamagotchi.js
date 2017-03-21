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
	this.puke = function(){
		this.health--;
		console.log('New, new value of food in tummy: ' + this.foodInTummy + ' plus a crying sound');
	}
	this.yawn = function(){
		this.restedness--;
		console.log(this.name + ' has current restedness of: ' + this.restedness);
	}
	this.start = function(){
		var scope = this;
		scope.hungerTimer = setInterval(function(){ scope.cry(); }, 6000);
		scope.yawnTimer = setInterval(function(){ scope.yawn(); }, 10000);
		scope.sickTimer = setInterval(function(){ scope.puke(); }, 20000);
	}
	this.stop = function(){
		clearInterval(this.hungerTimer);
		clearInterval(this.yawnTimer);
		clearInterval(this.sickTimer);
	}
}

//create new Tamagotchis
// var madeTamagotchi1 = new Tamagotchi();
// var madeTamagotchi2 = new Tamagotchi();
// var madeTamagotchi3 = new Tamagotchi('Bashful', 'basidiomycota');
var madeTamagotchi4 = new Tamagotchi('Doc', 'zygomycota');
var madeTamagotchi5 = new Tamagotchi('Dopey', 'chytrydiomycota');
var madeTamagotchi6 = new Tamagotchi('Grumpy', 'eomycota');

// madeTamagotchi1.cry();
// madeTamagotchi2.cry();
// madeTamagotchi3.cry();
madeTamagotchi4.cry();
madeTamagotchi5.puke();
madeTamagotchi6.yawn();

//test out your Tamagotchies below via console.logs
// console.log('madeTamagotchi1');
// console.log('madeTamagotchi2');
// console.log('madeTamagotchi3');
// console.log('madeTamagotchi4');
console.log('madeTamagotchi5');
console.log('madeTamagotchi6');

