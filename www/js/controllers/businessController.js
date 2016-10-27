walkinApp.controller("businessController", function($scope, informationService, $location, $cordovaToast, $rootScope){
	$scope.info = {};
	$scope.next = function(){
     console.log($scope.info);
		 informationService.businessInfo($scope.info);
		 $location.path("/personal");
	}
});
