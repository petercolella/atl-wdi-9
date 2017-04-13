const controller = require('./about.controller.js');
const template = require('./about.html');

<<<<<<< HEAD
const AboutComponent = {
=======
const component = {
>>>>>>> 64bdf58ad785d374ccb2a68cf6448fd5d3ccd61a
	controller: controller,
	template: template
};

angular
	.module('criminals')
<<<<<<< HEAD
	.component('about', AboutComponent);
=======
	.component('about', component);
>>>>>>> 64bdf58ad785d374ccb2a68cf6448fd5d3ccd61a
