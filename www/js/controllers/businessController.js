walkinApp.controller("businessController", function($scope, informationService, $location, $cordovaToast, $rootScope){
	$scope.info = {};
	$rootScope.customerType = true;
	$scope.next = function(){
		 $location.path("/personal");
	}
});
