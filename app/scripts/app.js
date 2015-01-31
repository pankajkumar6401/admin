var app = angular.module('adminApp', ['ngRoute', 'ngAnimate', 'toaster','ui.bootstrap','pascalprecht.translate']);

app.config(['$routeProvider','$locationProvider','$translateProvider', function ($routeProvider,$locationProvider,$translateProvider) {
    $locationProvider.html5Mode(true);
    $translateProvider.translations('en', {
        HEADLINE: 'Hello there, This is my awesome app!',
        INTRO_TEXT: 'And it has i18n support!'
    });
    $translateProvider.preferredLanguage('en');
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
            controller: 'authCtrl'
        })
        .when('/customer/:id', {
            title: 'Customer',
            templateUrl: 'app/partials/customer.html',
            controller: 'authCtrl'
        })
        .when('/dog-price-factor/', {
            title: 'dog price factor',
            templateUrl: 'app/partials/dog-price-factor.html',
            controller: 'authCtrl'
        })
        .when('/cat-price-factor/', {
            title: 'cat price factor',
            templateUrl: 'app/partials/cat-price-factor.html',
            controller: 'authCtrl'
        })
        .when('/dog-breeds/', {
            title: 'cat price factor',
            templateUrl: 'app/partials/dogbreeds.html',
            controller: 'authCtrl'
        })
        .when('/cat-breeds/', {
            title: 'cat price factor',
            templateUrl: 'app/partials/catbreeds.html',
            controller: 'authCtrl'
        })
        .when('/health-questions/', {
            title: 'cat price factor',
            templateUrl: 'app/partials/questions/health.html',
            controller: 'authCtrl'
        })
        .when('/cat-questions/', {
            title: 'cat price factor',
            templateUrl: 'app/partials/questions/cat.html',
            controller: 'authCtrl'
        })
        .when('/illness-questions/', {
            title: 'cat price factor',
            templateUrl: 'app/partials/questions/illness.html',
            controller: 'authCtrl'
        })
        .when('/general-questions/', {
            title: 'cat price factor',
            templateUrl: 'app/partials/questions/general.html',
            controller: 'authCtrl'
        })
        .when('/messages/', {
            title: 'Messages',
            templateUrl: 'app/partials/questions/messages.html',
            controller: 'authCtrl'
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
