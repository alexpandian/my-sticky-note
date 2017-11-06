var login = angular.module("login", ["apiHandler"]);

login.constant("appOriginUrl", "http://localhost");
login.constant("apiRootUrl", "http://localhost");
login.constant("_ak_", "login");
login.service("loginrequestService", ["requestService", "_ak_","apiRootUrl", "$http", function(requestService, apiKey, apiRootUrl, $http){

	this.checkLogin = function(requestData){
		requestService.makeGetApi("/login", requestData );
	};

}]);
login.controller("testController", ["loginrequestService", "$scope", function(loginrequestService, $scope){
	$scope.testApiCall = function(){
		loginrequestService.checkLogin({ name : "alex" });
	};
	
}]);


