app.controller('customersCtrl',function($scope, $rootScope , $route, $routeParams ,$modal, $filter, $location, Data){
    $scope.customers = {};
    $scope.customer = {};
    $scope.customerPets = {};

    Data.get('customers').then(function(data){
        $scope.customers = data.data;

    });

    $scope.opencustomer = function(id) {
        Data.get('customer/' + id).then(function (data) {
            $scope.customer = data.customer.data[0];
            $scope.customerpets = data.customerpets.data;
            $location.path('/customer/'+id);
        });
    }

    var id = $routeParams.id;
      Data.get('customer/' + id).then(function (data) {
          $scope.customer = data.customer.data[0];
          $scope.customerpets = data.customerpets.data;
        });
});
