var main = angular.module("main", []);

main.constant("appOriginUrl", "http://localhost");
main.constant("apiRootUrl", "http://localhost");
main.constant("apiKey", "1234567890");

main.run(["$http","apiHandlerService", function($http, apiHandlerService){
	// main.constant("apiKey", "1234567890");
	apiHandlerService.makeGetApi("/test",{"name":"alex"});
}]);

main.service("apiHandlerService", ["apiKey","apiRootUrl", "$http", function(apiKey, apiRootUrl, $http){

	this.makeGetApi = function(relativeUrl, requestData){
		requestData._key = apiKey;
		$http({
			method : "POST",
			url    : apiRootUrl + relativeUrl,
			data   : requestData
		})
		.then(function(response){
			alert("dfsd");
		}, function(response){
			console.log(response);
		});
	};

}]);


