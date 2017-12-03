'use strict';

angular.module('controllers', []).controller('ListCtrl', function() {
	// Do nothing

}).controller('MacroPoloCtrl', function($scope, MacroPoloService) {
	$scope.numbers = MacroPoloService.getNumbers(100);
	console.log($scope.numbers);
}).controller('ScopeCtrl', function() {
	// Do Nothing
});