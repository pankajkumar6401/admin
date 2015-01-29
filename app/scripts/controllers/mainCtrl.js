app.controller('mainCtrl',function($scope, $modal, $filter, $location, Data){
    $scope.customers = {};
    Data.get('customers').then(function(data){
        $scope.customers = data.data;

    });
    $scope.customer = [];

    $scope.open = function(id) {
        Data.get('customer/' + id).then(function (data) {
            $scope.customer = data.data;
            console.log($scope.customer);
            $location.path('/customer/100000');
        });

    }




});