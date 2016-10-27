walkinApp.controller("homeController", function($scope, Restangular,$cordovaToast, $cordovaSpinnerDialog,
	$cordovaPreferences, $location, informationService, loginService, $window){
  $scope.home = {};
	$scope.signin = function(){
		console.log("hai");
		console.log($scope.home);
		informationService.homeInfo($scope.home);
		$location.path("/business");
};
});
