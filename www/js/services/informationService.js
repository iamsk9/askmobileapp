walkinApp.factory("informationService", function(Restangular,$q, $http){
	var customerInfo = {};
	var shoppingDetails = {};
	var ratings = {};
	var storeInfo;

	var saveStore = function(data){
		storeInfo = data;
	};

	var setCustomerInfo = function(data){
		if(data.gender=="male")
			data.gender = 1;
		else
			data.gender = 0;
		customerInfo = data;
	};

	var setShoppingInfo = function(data){
		if (data.budget === "<1000")
		 	data.budget = 1;
		else if(data.budget === "1000-2000")
			data.budget = 2;
		else if(data.budget === "2000-5000")
			data.budget = 3;
		else if(data.budget === "5000-10000")
			data.budget = 4;
		else
			data.budget = 5;

		shoppingDetails = data;
	};

	var setRatings = function(data){
		ratings = data;
	};

	var postToServer = function(){
		var postData = {};
		postData.store = storeInfo;
		postData.customerName = customerInfo.customerName;
		postData.gender = customerInfo.gender;
		postData.contactNumber = customerInfo.contactNumber;
		postData.type = customerInfo.type;
		postData.lookingFor = shoppingDetails.lookingFor;
		postData.budget = shoppingDetails.budget;
		postData.remarks = shoppingDetails.remarks;
		postData.category = shoppingDetails.category;
		postData.storeQuality = ratings.storeQuality;
		postData.storeAmbience = ratings.storeAmbience;
		postData.rangeOfProducts = ratings.rangeOfProducts;
		postData.qualityOfService = ratings.qualityOfService;
		postData.exchange = ratings.exchange;
		postData.suggestions = ratings.suggestions;

		console.log(postData);
		console.log(shoppingDetails.category);
		console.log(postData.category);

    var link = 'http://epicsoft.esy.es/fdetails.php';
      return $http.post(link, postData)
      .then(function (res){
        return res.data;
    });
		/*var deferred = $q.defer();
		var postData = {customerInfo : customerInfo , shoppingDetails : shoppingDetails,
			ratings : ratings};
		Restangular.one("/shoppingDetails").post('',postData).then(function(data){
			if(data.returnCode == "SUCCESS")
			{
				deferred.resolve();
			}
			else
			{
				deferred.reject();
			}
		}, function(error){
			deferred.reject();
		});
		return deferred.promise;*/
	};
	return {
		setCustomerInfo : setCustomerInfo,
		setShoppingInfo : setShoppingInfo,
		setRatings : setRatings,
		saveStore : saveStore,
		postToServer : postToServer
	};
});
