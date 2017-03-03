'use strict'
angular.module('app', ['ui.router', 'ngCookies', 'validation', 'ngAnimate', 'angularGrid', 'me-lazyload']);
'use strict';

angular.module('app').config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
	$stateProvider.state('main', {
		url: '/main',
		templateUrl: 'view/main.html',
		controller: 'mainCtrl'
	});
	$urlRouterProvider.otherwise('main');
}])
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
'use strict';
angular.module('app').directive('appFoot', [function() {
	return {
		restrict: 'A',
		replace: true,
		templateUrl: 'view/template/foot.html',
		scope: false,
		link: function($scope) {}
	};
}]);
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