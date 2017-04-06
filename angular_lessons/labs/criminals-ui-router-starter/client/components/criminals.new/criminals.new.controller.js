CriminalsNewController.$inject = [/*something*/'CriminalsService'];

function CriminalsNewController(CriminlsService) {
	const vm = this;

	vm.newCriminal = {};

	activate();

	function activate() {
		addNewCriminal();
	}

	function addNewCriminal() {
		console.log(newCriminal.data);
		CriminalsService
			.addCurrent(/*something*/vm.newCriminal)
			.then(function resolve(response) {
				vm.newCriminal.push('criminals');
			});
	}
}

module.exports = CriminalsNewController