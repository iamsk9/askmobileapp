walkinApp.controller("miscController", function($scope, informationService, $location,
	$cordovaToast, $cordovaSpinnerDialog, $window){
	$scope.misc = {};
	$scope.next = function(){
		console.log($scope.misc);
		informationService.miscInfo($scope.misc);
		informationService.postToServer();
	}
});
