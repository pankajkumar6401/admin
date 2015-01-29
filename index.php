<!DOCTYPE html>
<html lang="en" ng-app="adminApp">

<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>AngularJS Authentication App</title>
  <!-- BEGIN GLOBAL MANDATORY STYLES -->
  <link href="http://fonts.googleapis.com/css?family=Open+Sans:400,300,600,700&subset=all" rel="stylesheet" type="text/css"/>
  <link href="app/css/global/bootstrap-rtl.min.css" rel="stylesheet" type="text/css"/>
  <link href="app/css/global/font-awesome.min.css" rel="stylesheet" type="text/css"/>

  <!-- BEGIN THEME STYLES -->
  <link href="app/css/global/components-rtl.css" id="style_components" rel="stylesheet" type="text/css"/>
  <link href="app/css/global/plugins-rtl.css" rel="stylesheet" type="text/css"/>
  <link href="app/css/global/layout-rtl.css" rel="stylesheet" type="text/css"/>
  <!-- END THEME STYLES -->

  <!-- Bootstrap -->
  <link href="app/css/login-rtl.css" rel="stylesheet" type="text/css"/>
  <link href="app/css/global/custom-rtl.css" rel="stylesheet" type="text/css"/>
  <link href="app/css/toaster.css" rel="stylesheet">
  <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
  <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
  <!--[if lt IE 9]><link href= "css/bootstrap-theme.css"rel= "stylesheet" >

  <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
  <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
  <![endif]-->
</head>

<body ng-cloak="" ng-controller="mainCtrl" class="{{bodyclass}}">
<div id="wrapper">
   <!-- Navigation -->
   <nav class="navbar navbar-default navbar-static-top" role="navigation" style="margin-bottom: 0" ng-if="bodyclass != 'page-login'">
      <div ng-include="'app/partials/toplinks.html'"></div>
      <div ng-include="'app/partials/sidebar.html'"></div>
  </nav>

  <div data-ng-view="" id="ng-view" class="slide-animation"></div>
</div>
</body>
<toaster-container toaster-options="{'time-out': 3000}"></toaster-container>
<!-- Libs -->
<!-- BEGIN CORE JQUERY PLUGINS -->
<!--[if lt IE 9]>
<script src="app/js/global/plugins/respond.min.js"></script>
<script src="app/js/global/plugins/excanvas.min.js"></script>
<![endif]-->
<script src="app/js/global/plugins/jquery.min.js" type="text/javascript"></script>
<script src="app/js/global/plugins/bootstrap.min.js" type="text/javascript"></script>
<!-- END CORE JQUERY PLUGINS -->

<script src="app/js/angular.min.js"></script>
<script src="app/js/angular-route.min.js"></script>
<script src="app/js/angular-animate.min.js" ></script>
<script src="app/js/toaster.js"></script>
<script src="app/js/ui-bootstrap-tpls.min.js"></script>
<script src="app/scripts/app.js"></script>
<script src="app/scripts/services/data.js"></script>
<script src="app/scripts/directives/directives.js"></script>
<script src="app/scripts/controllers/authCtrl.js"></script>
<script src="app/scripts/controllers/mainCtrl.js"></script>
</html>

