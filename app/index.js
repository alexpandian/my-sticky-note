var login = angular.module("login", ["apiHandler", "ui.router"]);
login.constant("appOriginUrl", "http://localhost/my-sticky-note");
login.constant("apiRootUrl", "http://localhost/my-sticky-note");
login.constant("_ak_", "login");

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



login.service("loginrequestService", ["requestService", "_ak_","apiRootUrl", "$http", function(requestService, apiKey, apiRootUrl, $http){

	this.checkLogin = function(requestData){
		return requestService.makePostRequest("/login", requestData );
	};

}]);
login.service("joinRequestService", ["requestService", "_ak_","apiRootUrl", "$http", function(requestService, apiKey, apiRootUrl, $http){

	this.registerUser = function(requestData){
		return requestService.makePutRequest("/join", requestData );
	};
	this.checkNewEmail = function(requestData){
		if(requestData.email == "test@test.com" ){
			return true;
		}else{
			return false;
		}
		return false;
		return requestService.makePostRequest("/checkEmail", requestData );
	};

}]);
login.controller("loginController", ["loginrequestService", "$scope", function(loginrequestService, $scope){
	$scope.validateLogin = function(loginFrom){ console.log(loginFrom);
		loginrequestService.checkLogin({ name : "alex" });
	};
	
}]);


login.controller("joinController", ["joinRequestService", "$scope", function(joinRequestService, $scope){
	$scope.joinUser = function(joinForm){
		joinRequestService.registerUser($scope.user);
	};
	$scope.checkEmail = function(email){
		if(email.$valid){
			$scope.emailCheckResult = false;
			var result = joinRequestService.checkNewEmail({email : $scope.user.email});
			if(result){
				$scope.emailValidateHelp = false;
			}else{
				email.$setValidity("email", false);
				//email.$invalid = true;
				$scope.emailValidateHelp = true;
				$scope.emailCheckResult = true;
			}
		}
	};
}]);
