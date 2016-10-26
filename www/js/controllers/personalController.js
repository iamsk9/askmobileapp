walkinApp.controller("personalController", function($scope, informationService, $cordovaToast,
	$location, categoryService){
	$scope.shoppingDetails = {};
	$scope.categories = ['Sarees', 'Dress Material', 'Men Wear', 'Kids Wear', 'Furnitures', 'Readymade Dresses', 'Accessories'];
	$scope.submit = function(){
		$location.path('/misc');
	}
});
