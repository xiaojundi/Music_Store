'use strict';
angular.module('app').directive('appPositionList', [function() {
	return {
		restrict: 'A',
		replace: true,
		templateUrl: 'view/template/list.html',
		scope: {
			data: '='
		},
		link: function($scope) {
			if ($scope.limit == undefined)
				$scope.limit = 4;
			$scope.loadMore = function() {
				$scope.limit = $scope.limit + 4;
			}
		}
	};
}]);