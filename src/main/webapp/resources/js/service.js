'use strict';

var app = angular.module('services', []);
app.service('MacroPoloService', function() {
	this.getNumbers = function(limit) {
		var output = [];
		for ( var i = 1; i <= limit; i++) {
			if (i % 28 == 0) {
				output.push('macropolo');
			} else if (i % 4 == 0) {
				output.push('macro');
			} else if (i % 7 == 0) {
				output.push('polo');
			} else {
				output.push(i);
			}
		}
		return output;
	};
});