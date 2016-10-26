walkinApp.factory("categoryService", function(Restangular,$q){
	var categories = [];
	var setCategories = function(data){
		for(i in data)
		{
			categories.push(data[i].CATEGORY_NAME);
		}
	};
	var getCategories = function(){
		return categories
	};
	return {
		setCategories : setCategories,
		getCategories : getCategories
	};
});