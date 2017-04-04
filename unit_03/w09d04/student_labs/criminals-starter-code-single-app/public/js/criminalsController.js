angular.module('InfamousCriminals')
	.controller('CriminalsController', CriminalsController);

CriminalsController.$inject = ['$http'];

function CriminalsController($http) {
	var vm = this;

	vm.addCriminal = addCriminal;
	vm.all = [];
	vm.newCriminal = {};
	vm.deleteCriminal = deleteCriminal;
	vm.editCriminal = editCriminal;
	// vm.updateCriminal = updateCriminal;
	vm.hideform = true;

	this.all = [
		{name: 'Joe', location: 'Here', status: 'Unknown'}
	];

	activate();

	function activate() {
		loadAllCriminals();
	}

	function addCriminal(){
    console.log('Adding...');
    console.log(vm.newCriminal);
    
    $http
	    .post('/criminals', vm.newCriminal)
	    .then(function someName(response) {
	    	vm.all.push(response.data.criminal);
	    	vm.newCriminal = {};
	    });
  	}

  	function deleteCriminal(criminal) {
  		console.log(criminal);
  	$http
  		.delete('/criminals/' + criminal._id)
  		.then(function(response) {
  			loadAllCriminals();
  		});
  	}

  	function editCriminal(criminal) {
  		
  	$http
  		.get('/criminals/' + criminal._id)
  		vm.updateCriminal = criminal;
  		console.log(criminal);
  	}

  	// function updateCriminal(criminal) {

  	// $http
  	// 	.patch('/criminals/' + criminal._id)
  	// }

	function loadAllCriminals() {
    $http
      	.get('/criminals')
      	.then(function setAll(reponse) {
        	console.log(reponse.data);
        	vm.all = reponse.data.criminals;
      	});
  	}
}