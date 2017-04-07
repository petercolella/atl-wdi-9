CriminalsNewController.$inject = ['CriminalsService', '$state'];

function CriminalsNewController(CriminalsService, $state) {
	const vm = this;

	vm.addNewCriminal = addNewCriminal;
	vm.newCriminal = {};

	activate();

	function activate() {
		console.log('this thing better fucking work this time');
	};

	function addNewCriminal() {
		console.log(newCriminal);
		CriminalsService
			.addNew(vm.newCriminal)
			.then(function resolve(response) {
				console.log(response);
				vm.newCriminal = {};
				$state.go('criminals')
			});
	}
}

module.exports = CriminalsNewController