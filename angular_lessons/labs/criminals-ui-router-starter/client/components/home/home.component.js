const controller = require('./home.controller.js');
const template = require('./home.html');

<<<<<<< HEAD
const Component = {
=======
const component = {
<<<<<<< HEAD
>>>>>>> 64bdf58ad785d374ccb2a68cf6448fd5d3ccd61a
	controller: controller,
	template: template
};

angular
	.module('criminals')
<<<<<<< HEAD
	.component('home', Component);
=======
	.component('home', component);
>>>>>>> 64bdf58ad785d374ccb2a68cf6448fd5d3ccd61a
=======
  controller: controller,
  template: template
};

angular
  .module('criminals')
  .component('home', component);
>>>>>>> 5589bc133bafa8ca4d606b05ef423dfa48528eb5
