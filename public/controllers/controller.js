var myApp = angular.module('myApp', []);

myApp.controller('AppCtrl', ['$scope', '$http',
	function($scope, $http){

		var refresh = function(){
			console.log("message from controller");

			$http.get('/contactlist').then(function(response){
				console.log("Got data!");
				$scope.contactList = response.data;
			});	
		};
		

	refresh();

	$scope.addContact = function(){
		console.log($scope.contact);
		$http.post('/contactlist', $scope.contact).success(function(response){
			console.log(response);
			refresh();
		});
	};

	$scope.remove = function(id){
		console.log(id);
		$http.delete('/contactlist/' + id).then(function(response){
			refresh();
		});
	};	


	$scope.edit = function(id){
		console.log(id);
		$http.get('/contactlist/' + id).then(function(response){
			$scope.contact = response.data;
		});
	};	

	$scope.update = function(){
		console.log($scope.contact);
		$http.put('/contactlist/'+ $scope.contact._id, $scope.contact).then(function(response){
			refresh();
		});
	};

	$scope.deselect = function() {
	  		$scope.contact = "";
	};

}]);
