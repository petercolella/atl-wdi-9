angular
	.module('criminals')
	.service('CriminalsService', CriminalsService);

CriminalsService.$inject = ['$http'];

function CriminalsService($http) {
	const self = this;

	// WHAT THIS SERVICE DOES / HAS AVAILABLE TO CALL
<<<<<<< HEAD
	self.addNew = addNew;
	self.editCurrent = editCurrent;
	self.loadAll = loadAll;
	self.loadCurrent = loadCurrent;
	self.newCriminal = {};


	// HOW IT DOES STUFF
	function addNew(newCriminal) {
		return $http.post('/api/criminals', newCriminal);
	}

	function editCurrent(id) {
		return $http.patch('/api/criminals/' + id);
=======
	self.create = create;
	self.loadAll = loadAll;
	self.loadCurrent = loadCurrent;


	// HOW IT DOES STUFF
	function create(criminalData) {
		return $http
			.post('/api/criminals', criminalData);
>>>>>>> 64bdf58ad785d374ccb2a68cf6448fd5d3ccd61a
	}

	function loadAll() {
		return $http.get('/api/criminals');
	}

	function loadCurrent(id) {
		return $http.get('/api/criminals/' + id);
	}
}
