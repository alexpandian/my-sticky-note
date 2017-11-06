var apiHandler = angular.module("apiHandler", []);

apiHandler.service("requestService", ["_ak_","apiRootUrl", "$http", "$rootScope", function(apiKey, apiRootUrl, $http, $rootScope){

	function handle404(){
		//console.log($rootScope);
		alert("404");
	};

	function handleUnknown(){
		alert("unknown");
	};

	this.makeGetApi = function(relativeUrl, requestData){
		requestData._ak_ = apiKey;
		$http({
			method : "POST",
			url    : apiRootUrl + relativeUrl,
			data   : requestData
		})
		.then(
			function(response){
				return response.data;
			}, 
			function(response){
				
				switch(response.status){

					case 404:
						handle404();
					break;

					default :
						handleUnknown();
					break; 
				}
			}
		);
	};

}]);


