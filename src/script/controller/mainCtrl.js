'use strict';
angular.module('app').controller('mainCtrl', ['$http', '$scope', function($http, $scope) {
	var key = true;
	$scope.playVideo = function(e) {
		var video = angular.element(e.srcElement);
		if (key == true) {
			video[0].play();
			key = false;
		} else {
			video[0].pause();
			key = true;
		}
	}
	$http.get('/data/wurrlies.json').then(function(resp) {
		$scope.list = resp.data.items;
	});
}]);