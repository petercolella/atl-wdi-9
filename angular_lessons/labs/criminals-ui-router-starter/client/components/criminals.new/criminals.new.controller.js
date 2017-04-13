<<<<<<< HEAD
CriminalsNewController.$inject = ['CriminalsService', '$state'];

function CriminalsNewController(CriminalsService, $state) {
	const vm = this;

	vm.addNewCriminal = addNewCriminal;
=======
CriminalsNewController.$inject = ['$state', 'CriminalsService'];

function CriminalsNewController($state, CriminalsService) {
	const vm = this;

	vm.createCriminal = createCriminal;
>>>>>>> 64bdf58ad785d374ccb2a68cf6448fd5d3ccd61a
	vm.newCriminal = {};

	activate();

<<<<<<< HEAD
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
=======
	function activate() {}

	function createCriminal() {
		CriminalsService
			.create(vm.newCriminal)
			.then(function resolve(response) {
				const id = response.data.criminal._id;
				$state.go('criminalsShow', { criminalId: id });
>>>>>>> 64bdf58ad785d374ccb2a68cf6448fd5d3ccd61a
			});
	}
}

<<<<<<< HEAD
module.exports = CriminalsNewController
=======
module.exports = CriminalsNewController;
>>>>>>> 64bdf58ad785d374ccb2a68cf6448fd5d3ccd61a
