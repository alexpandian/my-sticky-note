var login = angular.module("login", ["apiHandler", "ui.router"]);

login.config(function($stateProvider, $urlRouterProvider){
	$stateProvider.state({
		name : "login",
		url  : "/login",
		controller : "loginController",
		templateUrl : "./app/templates/login.html"
	});
	$stateProvider.state({
		name : "join",
		url  : "/join",
		templateUrl : "./app/templates/join.html"
	});
	$stateProvider.state({
		name : "forgetPassword",
		url  : "/forgetPassword",
		templateUrl : "./app/templates/forgetPassword.html"
	});
	$urlRouterProvider.otherwise('/login');
});

login.constant("appOriginUrl", "http://localhost");
login.constant("apiRootUrl", "http://localhost");
login.constant("_ak_", "login");

login.service("loginrequestService", ["requestService", "_ak_","apiRootUrl", "$http", function(requestService, apiKey, apiRootUrl, $http){

	this.checkLogin = function(requestData){
		requestService.makeGetApi("/login", requestData );
	};

}]);
login.controller("loginController", ["loginrequestService", "$scope", function(loginrequestService, $scope){
	$scope.validateLogin = function(loginFrom){ console.log(loginFrom);
		loginrequestService.checkLogin({ name : "alex" });
	};
	
}]);


