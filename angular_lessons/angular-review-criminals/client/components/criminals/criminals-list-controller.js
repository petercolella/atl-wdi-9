function CriminalsListController (CriminalsService) {
	var vm = this;

	CriminalsService.getCriminals()
		.then(function(response) {
			console.log(response);
			vm.criminalsList = response.data.criminals;
			//vm.criminalsList = criminalsList;
	});

	vm.greeting = ('hello, there!');
	vm.message = CriminalsService.message;
}

CriminalsListController.$inject = ['CriminalsService'];

module.exports = CriminalsListController;