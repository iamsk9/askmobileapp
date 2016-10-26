walkinApp.factory("informationService", function(Restangular,$q, $http){
	var homeInfo = {};
	var businessInfo = {};
	var personalInfo = {};
	var misInfo = {};
	var storeInfo;

	var homeInfo = function(data){
		homeInfo = data;
	};

	var businessInfo = function(data){
		businessInfo = data;
	};

	var personalInfo = function(data){
		personalInfo = data;
	};

	var misInfo = function(data){
		misInfo = data;
	};

	var postToServer = function(){
		var postData = {};


		console.log(postData);
    var link = 'http://epicsoft.esy.es/fdetails.php';
      return $http.post(link, postData)
      .then(function (res){
        return res.data;
    });
	};
	return {
		homeInfo : homeInfo,
		businessInfo : businessInfo,
		personalInfo : personalInfo,
		misInfo : misInfo,
		postToServer : postToServer
	};
});
