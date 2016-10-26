walkinApp.factory("loginService", function($http){
  var logining = function (data) {
    var link = 'http://epicsoft.esy.es/flogin.php';
      return $http.post(link, data)
      .then(function (res){
        return res.data;
      });
  };
  return {
		logining: logining
	};
});
