CriminalsEditController.$inject = ['$stateParams', 'CriminalsService'];

function CriminalsEditController($stateParams, CriminalsService) {
	const vm = this;

	vm.current = {};

	activate();

	function activate() {
		editCurrentCriminal();
	}

	function editCurrentCriminal() {
		CriminalsService
		.editCurrent($stateParams.criminalId)
		.then(function resolve(response) {
			vm.current = response.data.criminal;
		});
	}
}