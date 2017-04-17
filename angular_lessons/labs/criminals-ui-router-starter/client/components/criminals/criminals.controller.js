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
<<<<<<< HEAD
				// console.log(response);
=======
>>>>>>> 64bdf58ad785d374ccb2a68cf6448fd5d3ccd61a
				vm.criminals = response.data.criminals;
=======
				console.log(response)
				vm.criminals = response.data.criminals; // array of criminals
>>>>>>> 5589bc133bafa8ca4d606b05ef423dfa48528eb5
				vm.loading = false;
			});
	}
}

module.exports = CriminalsController;
