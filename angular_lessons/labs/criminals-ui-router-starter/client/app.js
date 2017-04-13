const angular = require('angular');
require('angular-ui-router');

angular
	.module('criminals', ['ui.router'])
	.config(uiRouterSetup)

uiRouterSetup.$inject = ['$stateProvider', '$urlRouterProvider'];
function uiRouterSetup($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state('home', {
			url: '/',
			template: '<home></home>'
			// template: '<h1>Home</h1><a ui-sref="about">About</a>'
		})
		.state('about', {
			url: '/about',
			template: '<about></about>'
			// template: '<h1>About</h1><a ui-sref="home">Home</a>'
		})
		.state('criminals', {
			url: '/criminals',
			template: '<criminals></criminals>'
		})
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

