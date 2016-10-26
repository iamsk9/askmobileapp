walkinApp.controller("shoppingDetailsController", function($scope, informationService, $cordovaToast,
	$location, categoryService){
	$scope.shoppingDetails = {};
	$scope.categories = ['Sarees', 'Dress Material', 'Men Wear', 'Kids Wear', 'Furnitures', 'Readymade Dresses', 'Accessories'];
	$scope.submit = function(){
		if($scope.shoppingDetails.lookingFor != undefined && $scope.shoppingDetails.lookingFor != ""
			&& $scope.shoppingDetails.category != undefined && $scope.shoppingDetails.category != ""
			&& $scope.shoppingDetails.budget != undefined && $scope.shoppingDetails.budget != "")
		{
			console.log($scope.shoppingDetails.category);
			informationService.setShoppingInfo($scope.shoppingDetails);
			$location.path('/ratings');
		}
	}
});
