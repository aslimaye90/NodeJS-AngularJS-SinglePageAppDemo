var app = angular.module('myApp', ['ngRoute']);

app.config(function ($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'partials/def'
	})
	.when('/partials/p1', {
  		templateUrl: 'partials/1'
	})
	.when('/partials/p2', {
	  templateUrl: 'partials/2'
	})
});