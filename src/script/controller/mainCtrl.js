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

	// function loadMore() {
	// 	//loading more data 
	// 	$scope.$broadcast('lazyLoadingFinished'); //notify the directive to finish the current loading 
	// 	if (noMore) {
	// 		$scope.$broadcast('allLoaded'); //all data loaded, remove all the touch events 
	// 	}
	// }
	// //listen on the user touch event, which will be fired from the directive 
	// $scope.$on('lazyLoading', function() {
	// 	loadMore();
	// });
}]);