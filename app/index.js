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
		controller : "joinController",
		templateUrl : "./app/templates/join.html"
	});
	$stateProvider.state({
		name : "forgetPassword",
		url  : "/forgetPassword",
		controller : "forgetPasswordController",
		templateUrl : "./app/templates/forgetPassword.html"
	});
	$urlRouterProvider.otherwise('/login');
});



login.service("loginrequestService", ["requestService", "_ak_","apiRootUrl", "$http", function(requestService, apiKey, apiRootUrl, $http){

	this.checkLogin = function(requestData){
		return true;
		return requestService.makePostRequest("/login", requestData );
	};

}]);
login.service("joinRequestService", ["requestService", "_ak_","apiRootUrl", "$http", function(requestService, apiKey, apiRootUrl, $http){

	this.registerUser = function(requestData){
		return requestService.makePostRequest("/join", requestData );
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
login.service("ForgetPasswordRequestService", ["requestService", "_ak_","apiRootUrl", "$http", function(requestService, apiKey, apiRootUrl, $http){

	this.resetPassword = function(requestData){
		return false;
		return requestService.makePostRequest("/resetPassword", requestData );
	};

}]);
login.controller("loginController", ["loginrequestService", "$scope","$window","appOriginUrl", function(loginrequestService, $scope, $window, appOriginUrl){
	$scope.validateLogin = function(loginFrom){ 
		var result = loginrequestService.checkLogin($scope.user);
		if(result){ 
			$window.location.href = appOriginUrl + "/digitalDiary";
		}
	};
	
}]);


login.controller("joinController", ["joinRequestService", "$scope", function(joinRequestService, $scope){
	$scope.joinUser = function(joinForm){
		var result = joinRequestService.registerUser($scope.user);
		if(result){
			$window.location.href = appOriginUrl + "/digitalDiary";
		}
	};
	$scope.checkEmail = function(email){
		if(email.$valid){
			$scope.emailCheckResult = false;
			var result = joinRequestService.checkNewEmail({email : $scope.user.email});
			if(result){
				$scope.emailValidateHelp = false;
			}else{
				email.$setValidity("email", false);
				$scope.emailValidateHelp = true;
				$scope.emailCheckResult = true;
			}
		}
	};
}]);

login.controller("forgetPasswordController", ["ForgetPasswordRequestService", "$scope","$window","appOriginUrl", function(ForgetPasswordRequestService, $scope, $window, appOriginUrl){
	$scope.resendPassword = function(forgotPassFrom){ 
		$scope.emailValid = false;
		$scope.emailinvalid = false;
		var result = ForgetPasswordRequestService.resetPassword($scope.user);
		if(result){ 
			$scope.emailValid = true;
			$scope.emailInvalid = false;
			forgotPassFrom.$setValidity("valid", false);
		}else{
			$scope.emailValid = false;
			$scope.emailInvalid = true;
		}
	};
	
}]);
