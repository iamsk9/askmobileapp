walkinApp.controller("personalController", function($scope, informationService, $cordovaToast,
	$location, categoryService){
	$scope.personal = {};
	//$scope.categories = ['Sarees', 'Dress Material', 'Men Wear', 'Kids Wear', 'Furnitures', 'Readymade Dresses', 'Accessories'];
	$scope.submit = function(){
		console.log($scope.personal);
		informationService.personalInfo($scope.personal);
		$location.path('/misc');
	}
});
