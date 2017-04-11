var myApp = angular.module('myApp', []);

myApp.controller('AppCtrl', ['$scope', '$http',
	function($scope, $http){
		console.log("message from controller");
}]);