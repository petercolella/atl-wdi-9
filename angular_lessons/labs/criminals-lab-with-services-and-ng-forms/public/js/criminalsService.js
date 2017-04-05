angular.module('InfamousCriminals')
    .service('CriminalsService', CriminalsService);

CriminalsService.$inject = ['$http'];

function CriminalsService($http) {
	
};

function getCriminals() {
	console.log('getCriminals is alive!');
  
  	var self = this;
	self.greeting = 'getCriminals says Hi ';

}

function addCriminal() {

}

function deleteCriminal() {

}