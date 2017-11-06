<?php
defined('BASEPATH') OR exit('No direct script access allowed');
?>
<!DOCTYPE html>
<html>
<head>
	<title>Digital Diary</title>
	<script type="text/javascript" src="./angular/angular.js"></script>
	<script type="text/javascript" src="./angular/angular-ui-router.js" ></script>
	<script type="text/javascript" src="./jquery/jquery.min.js"></script>
</head>
<body ng-app="login" >
	<header>
		<div class="container-fluid" >
			<h2>Digital Diary</h2>
		</div>
	</header>
	<div class="col-md-12 col-sm-12" >
		<div class="col-md-6 col-sm-12" >
			
		</div>
	</div>
	<div ng-controller="testController" >
		<button ng-click="testApiCall()" >test</button>
	</div>
</body>
<script type="text/javascript" src="./app/common/api-handler.js"></script>
<script type="text/javascript" src="./app/index.js"></script>
<link rel="stylesheet" type="text/css" href="./bootstrap/css/bootstrap.min.css">
<script type="text/javascript" src="./bootstrap/js/bootstrap.min.js" ></script>
</html>