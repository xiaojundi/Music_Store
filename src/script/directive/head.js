'use strict';
angular.module('app').directive('appHead', [function() {
	return {
		restrict: 'A',
		replace: true,
		scope: {
			com: '='
		},
		templateUrl: 'view/template/head.html'
	};
}]);