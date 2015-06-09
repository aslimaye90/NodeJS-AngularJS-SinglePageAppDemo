var app = angular.module('myApp', ['ngRoute']);

app.config(function ($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'partials/def',
		controller: 'ctrlDef'
	})
	.when('/partials/p1', {
  		templateUrl: 'partials/1',
  		controller: 'ctrl1'
	})
	.when('/partials/p2', {
	  templateUrl: 'partials/2',
	  controller: 'ctrl2'
	})
});

app.controller('ctrl1', function($scope){
	$scope.greeting = "Hello world!";
});

app.controller('ctrl2', function($scope){
	$scope.greeting = "Hi world!";
});

app.controller('ctrlDef', function($scope){
	$scope.greeting = "Default - Hello world!";
});