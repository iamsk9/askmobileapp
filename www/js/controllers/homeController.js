walkinApp.controller("homeController", function($scope, Restangular,$cordovaToast, $cordovaSpinnerDialog,
	$cordovaPreferences, $location, informationService, loginService, $window){

	$scope.signin = function(){
		$location.path("/business");
};

});
