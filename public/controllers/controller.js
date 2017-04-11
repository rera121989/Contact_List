var myApp = angular.module('myApp', []);

myApp.controller('AppCtrl', ['$scope', '$http',
	function($scope, $http){
		console.log("message from controller");

	$http.get('/contactList').then(function(response){
		console.log("Got data!");
			$scope.contactList = response.data;
	});
}]);
