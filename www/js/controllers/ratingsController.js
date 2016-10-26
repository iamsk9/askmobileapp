walkinApp.controller("ratingsController", function($scope, informationService, $location,
	$cordovaToast, $cordovaSpinnerDialog, $window){
	$scope.ratings = {};
	$scope.next = function(){
		console.log($scope.ratings);
		if($scope.ratings.storeAmbience != undefined && $scope.ratings.storeQuality && $scope.ratings.
			rangeOfProducts != undefined && $scope.ratings.qualityOfService != undefined)
		{
			informationService.setRatings($scope.ratings);
			console.log($scope.ratings.suggestions);
			informationService.postToServer().then(function(data){
				console.log("result");
				$window.alert("Entered Customer Details Successfully");
				$location.path('/home');
			},function(error){
				console.log("OOPS error");
			});
			/*
			$cordovaSpinnerDialog.show("","Loading",true);
			informationService.setRatings($scope.ratings);
			informationService.postToServer().then(function(data){
				$cordovaSpinnerDialog.hide();
				$cordovaToast.showLongBottom("Data Has been Saved.").then(function(){
					$location.path('/home');
				});
			},function(error){
				console.log("OOPS error");
				$cordovaSpinnerDialog.hide();
				$cordovaToast.showLongBottom("Request Unsuccessful.").then(function(){
				});
			});
			*/
		}
		else
		{/*
			$cordovaToast.showLongBottom("Please fill all the details.").then(function(){
			});*/
			console.log("Enter Details");
		}
	}
});
