var app = angular.module('adminApp', ['ngRoute', 'ngAnimate', 'toaster','ui.bootstrap']);

app.config(['$routeProvider',
  function ($routeProvider) {
        $routeProvider.
            when('/login', {
                title: 'Login',
                templateUrl: 'app/partials/login.html',
                controller: 'authCtrl',
                activepage : 'page-login'
            })
            .when('/logout', {
                title: 'Logout',
                templateUrl: 'app/partials/login.html',
                controller: 'logoutCtrl',
                activepage: 'page-logout'
            })
            .when('/signup', {
                title: 'Signup',
                templateUrl: 'app/partials/signup.html',
                controller: 'authCtrl'
            })
            .when('/dashboard', {
                title: 'Dashboard',
                templateUrl: 'app/partials/dashboard.html',
                controller: 'authCtrl',
                activepage: 'page-dashboard'
            })
            .when('/', {
                title: 'Dashboard',
                templateUrl: 'app/partials/dashboard.html',
                controller: 'authCtrl',
                role: '0'
            })
            .when('/customers', {
                title: 'Customers',
                templateUrl: 'app/partials/customers.html',
                controller: 'authCtrl',
                activepage: 'page-customers'
            })
            .when('/customer/:id', {
                title: 'Customer',
                templateUrl: 'app/partials/customer.html',
                controller: 'authCtrl',
                activepage: 'page-customer'
            })
            .otherwise({
                redirectTo: '/login',
                activepage: 'page-login'
            });
  }])
    .run(function ($rootScope,$route, $location, Data) {
        $rootScope.$on("$routeChangeStart", function (event, next, current) {
            $rootScope.authenticated = false;
            Data.get('session').then(function (results) {
                if (results.uid) {
                    $rootScope.authenticated = true;
                    $rootScope.uid = results.uid;
                    $rootScope.name = results.name;
                    $rootScope.email = results.email;
                } else {
                    var nextUrl = next.$$route.originalPath;
                    if (nextUrl == '/signup' || nextUrl == '/login') {

                    } else {
                        $location.path("/login");
                    }
                }
            });
        });
    });
