const controller = require('./about.controller.js');
const template = require('./about.html');

const AboutComponent = {
	controller: controller,
	template: template
};

angular
	.module('criminals')
	.component('about', AboutComponent);