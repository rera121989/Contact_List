var myApp = angular.module('myApp', []);

myApp.controller('AppCtrl', ['$scope', '$http',
	function($scope, $http){
		console.log("message from controller");

		person1 = {name: "Mark", email: "Mart@marc.com", number: "(323) 823-8347"};
		person2 = {name: "Chuck", email: "chuck@chuck.com", number: "(323) 947-1453"};
		person3 = {name: "Lilo", email: "lilo@lilo.com", number: "(323) 743-0983"};

		contacts = [person1, person2, person3];
		$scope.contactList = contacts;

}]);
