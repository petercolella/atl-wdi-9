const controller = require('./criminals.controller.js');
const template = require('./criminals.html');

<<<<<<< HEAD
const CriminalsComponent = {
=======
const component = {
>>>>>>> 64bdf58ad785d374ccb2a68cf6448fd5d3ccd61a
	controller: controller,
	template: template
};

angular
	.module('criminals')
<<<<<<< HEAD
	.component('criminals', CriminalsComponent);
=======
	.component('criminals', component);
>>>>>>> 64bdf58ad785d374ccb2a68cf6448fd5d3ccd61a
