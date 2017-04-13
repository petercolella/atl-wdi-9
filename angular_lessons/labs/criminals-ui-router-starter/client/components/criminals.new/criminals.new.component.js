const controller = require('./criminals.new.controller.js');
const template = require('./criminals.new.html');

const component = {
	controller: controller,
	template: template
};

angular
	.module('criminals')
<<<<<<< HEAD
	.component('criminalsNew', component);
=======
	.component('criminalsNew', component);
>>>>>>> 64bdf58ad785d374ccb2a68cf6448fd5d3ccd61a
