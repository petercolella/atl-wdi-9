const angular = require('angular');
require('angular-ui-router');

angular
	.module('criminals', ['ui.router'])
<<<<<<< HEAD
	.config(uiRouterSetup)
=======
	.config(uiRouterSetup);
>>>>>>> 64bdf58ad785d374ccb2a68cf6448fd5d3ccd61a

uiRouterSetup.$inject = ['$stateProvider', '$urlRouterProvider'];
function uiRouterSetup($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state('home', {
			url: '/',
			template: '<home></home>'
<<<<<<< HEAD
			// template: '<h1>Home</h1><a ui-sref="about">About</a>'
		})
		.state('about', {
			url: '/about',
			template: '<about></about>'
			// template: '<h1>About</h1><a ui-sref="home">Home</a>'
=======
		})
		.state('about', {
			url: '/about',
			// template: '<about></about>' // LAB Goal #1 -- get this line to work
			template: '<h1>About</h1><a ui-sref="home">Home</a>'
>>>>>>> 64bdf58ad785d374ccb2a68cf6448fd5d3ccd61a
		})
		.state('criminals', {
			url: '/criminals',
			template: '<criminals></criminals>'
		})
<<<<<<< HEAD
		.state('criminalsShow', {
			url: '/criminals/:criminalId',
			template: '<criminals-show></criminals-show>'
		})
		.state('criminalsNew', {
			url: '/new',
			template: '<criminals-new></criminals-new>'
			// template: '<h1>New Criminal</h1>'
		})
		.state('criminalsEdit', {
			url: '/criminals/:criminalId',
			template: '<criminals-edit></criminals-edit>'
		})
	$urlRouterProvider.otherwise('/');
}

=======
		.state('criminalsNew', {
			url: '/criminals/new',
			template: '<criminals-new></criminals-new>'
		})
		.state('criminalsShow', {
			url: '/criminals/:criminalId',
			template: '<criminals-show></criminals-show>'
		});

	$urlRouterProvider.otherwise('/');
}
>>>>>>> 64bdf58ad785d374ccb2a68cf6448fd5d3ccd61a
