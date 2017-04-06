angular.module('InfamousCriminals')
    .service('CriminalsService', CriminalsService);

CriminalsService.$inject = ['$http'];

function CriminalsService($http) {

	console.log('getCriminals is alive!');
	  
	  	var self = this;
		self.greeting = 'getCriminals says Hi ';

	function getCriminals() {

	}

	function addCriminal() {

	}

	function deleteCriminal() {

	}

};