walkinApp.controller("homeController", function($scope, informationService, $location, $cordovaToast, $rootScope){
	$scope.info = {};
	$rootScope.customerType = true;
	$scope.next = function(){
		if($scope.info.customerName != undefined && $scope.info.customerName != ""
			&& $scope.info.gender != undefined && $scope.info.gender != ""
			&& $scope.info.type != undefined && $scope.info.type != ""
			&& $scope.info.contactNumber != undefined && $scope.info.contactNumber != "")
		{
			informationService.setCustomerInfo($scope.info);
			if($scope.info.type == "Exchange"){
					$rootScope.customerType = false;
					console.log("Exchanged");
			}
			console.log($scope.info.type);
			if($scope.info.type == "Purchased" ||  $scope.info.type == "Exchange")
				$location.path("/ratings");
			else
				$location.path("/shopping");
		}
		else
		{
			$cordovaToast.showLongBottom("Please fill all the details.").then(function(){
			});
		}
	}
});
