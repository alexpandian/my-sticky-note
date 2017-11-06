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

	<div class="container">
	    <div class="row">
	        <h2>Login</h2>
	    </div>
	</div>
	<br>
	<br>
	<div class="container">
		<div class="row">
			<div class="col-md-4 col-md-offset-4">
				<div class="form-body">
				    <ul class="nav nav-tabs final-login">
				        <li ui-sref="login" ui-sref-active="active" class="pointer">
				        	<a>Sign In</a>
				        </li>
				        <li ui-sref="join" ui-sref-active="active" class="pointer">
				        	<a>Join Now!</a>
				        </li>
				    </ul>
				    <div class="tab-content">
				        <div id="sectionA" class="tab-pane fade in active">
				        	<div class="innter-form">
					            <ui-view></ui-view>
				            </div>
				            <div class="social-login">
					            <p>- - - - - - - - - - - - - Sign In With - - - - - - - - - - - - - </p>
					            <ul>
						            <li><a href=""><i class="fa fa-facebook"></i> Facebook</a></li>
						            <li><a href=""><i class="fa fa-google-plus"></i> Google+</a></li>
						            <li><a href=""><i class="fa fa-twitter"></i> Twitter</a></li>
					            </ul>
				            </div>
				            <div class="clearfix"></div>
				        </div>
				        <div id="sectionB" class="tab-pane fade">
				            <div class="innter-form">
					            
				            </div>
				            <div class="social-login">
					            <p>- - - - - - - - - - - - - Register With - - - - - - - - - - - - - </p>
					            <ul>
						            <li><a href=""><i class="fa fa-facebook"></i> Facebook</a></li>
						            <li><a href=""><i class="fa fa-google-plus"></i> Google+</a></li>
						            <li><a href=""><i class="fa fa-twitter"></i> Twitter</a></li>
					            </ul>
				            </div>
				        </div>
				    </div>
		    	</div>
		    </div>
	    </div>
    </div>

</body>
<script type="text/javascript" src="./app/common/api-handler.js"></script>
<script type="text/javascript" src="./app/index.js"></script>
<link rel="stylesheet" type="text/css" href="./bootstrap/css/bootstrap.min.css">
<script type="text/javascript" src="./bootstrap/js/bootstrap.min.js" ></script>
<link rel="stylesheet" type="text/css" href="./css/style.css">
</html>