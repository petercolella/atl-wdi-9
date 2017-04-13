CriminalsController.$inject = ['CriminalsService'];

function CriminalsController(CriminalsService) {
	const vm = this;

	// WHAT THIS CONTROLLER HAS / DOES THAT IS CONNECTED TO THE VIEW
	vm.criminals = [];
	vm.loading = true;


	// activate === BEST PRACTICE, ALWAYS DO IT, EVEN IF EMPTY
	activate();

	function activate() {
		loadAllCriminals();
	}
	

	// HOW IT DOES STUFF
	function loadAllCriminals() {
		CriminalsService
			.loadAll()
			.then(function resolve(response) {
<<<<<<< HEAD
				// console.log(response);
=======
>>>>>>> 64bdf58ad785d374ccb2a68cf6448fd5d3ccd61a
				vm.criminals = response.data.criminals;
				vm.loading = false;
			});
	}
}

module.exports = CriminalsController;
