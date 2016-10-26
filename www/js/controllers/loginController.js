walkinApp.controller("loginController", function($scope, Restangular,$cordovaToast, $cordovaSpinnerDialog,
	$cordovaPreferences, $location, informationService, loginService, $window){

	$scope.signin = function(){
		$location.path("/business");
		/*if($scope.login != undefined && $scope.login.empId != "" && $scope.login.password != "")
		{
			informationService.saveStore($scope.login.store);
			loginService.logining($scope.login)
    .then(function(result){
      if (result == 0) {
				$window.alert("Invalid Username or Password");
      }else {
				$location.path("/home");
      }
    });*/
			/*$cordovaSpinnerDialog.show("","Loading",true);
			Restangular.one("/authenticate").post('',$scope.login).then(function(data){
				$cordovaSpinnerDialog.hide();
				if(data.returnCode == "SUCCESS")
				{
					$location.path('/home');
				}
				else if(data.errorCode == 1010) {
					$cordovaToast.showLongBottom("Employee Id is not registered.").then(function(){

					});
				} else if(data.errorCode == 1011) {
					$cordovaToast.showLongBottom("Invalid Credentials. Please Enter the correct password.").
					then(function(){

					});
				}
				console.log(data);
			}, function(error){
				$cordovaSpinnerDialog.hide();
				$cordovaToast.showLongBottom("Unable to Reach the server.").then(function(){

				});
				console.log(error);
			});
		}else {
			$window.alert("Enter Credentials for login");
		}*/
};

});
