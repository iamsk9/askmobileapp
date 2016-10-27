walkinApp.factory("informationService", function(Restangular,$q, $http){
	var homeInfo = {};
	var businessInfo = {};
	var personalInfo = {};
	var miscInfo = {};
	var storeInfo;

	var homeInfo = function(data){
		homeInfo = data;
		//console.log(homeInfo);
	};

	var businessInfo = function(data){
		businessInfo = data;
		//console.log(businessInfo);
	};

	var personalInfo = function(data){
		personalInfo = data;
		//console.log(personalInfo);
	};

	var miscInfo = function(data){
		miscInfo = data;
		//console.log(miscInfo);
	};

	var postToServer = function(){
		var postData = collect(homeInfo,businessInfo,personalInfo,miscInfo);
		//postData = Object.assign({}, homeInfo, businessInfo, personalInfo,miscInfo);
		console.log(postData);
    var link = 'http://epicsoft.esy.es/fdetails.php';
      return $http.post(link, postData)
      .then(function (res){
        return res.data;
    });
	};

	function collect(a, b, c,e){
    var d = {};
    for(p in a){
        d[p] = a[p];
    }
    for(p in b){
        d[p] = b[p];
    }
    for(p in c){
        d[p] = c[p];
    }
		for(p in e)
		{
			d[p] = e[p];
		}
    return d;
  }

	return {
		homeInfo : homeInfo,
		businessInfo : businessInfo,
		personalInfo : personalInfo,
		miscInfo : miscInfo,
		postToServer : postToServer
	};
});
