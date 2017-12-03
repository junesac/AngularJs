'use strict';

var app =angular.module('sampleApp', [ 'ngRoute', 'controllers', 'services' ]);
app.directive('myHeader', function() {
		 return {
			 	restrict: 'E',
		        templateUrl : 'resources/pages/header.html'
		    };
	});
app.config(
		function($routeProvider) {
			$routeProvider.when('/', {
				templateUrl : 'resources/pages/homePage.html',
				controller : 'ListCtrl'
			});
			$routeProvider.when('/solution1', {
				templateUrl : 'resources/pages/macroPolo.html',
				controller : 'MacroPoloCtrl'
			});
			$routeProvider.when('/solution2', {
				templateUrl : 'resources/pages/scopeOfDirective.html',
				controller : 'ScopeCtrl'
			});
			$routeProvider.otherwise({
				redirectTo : '/'
			});
		});
