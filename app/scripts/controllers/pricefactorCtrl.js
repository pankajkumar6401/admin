app.controller('dogPriceCtrl',function($scope, $rootScope , $route, $routeParams ,$modal, $filter, $location,Data){
    $scope.dogprice = {}

    Data.get('dogpricefactors').then(function (data) {
        $scope.dogprice = data.data;
    });

    $scope.deletePrice = function(dogprice){
        if(confirm("Are you sure to remove the product")){
            Data.delete("dogpricefactors/"+dogprice.id).then(function(result){
                $scope.dogprice = _.without($scope.dogprice, _.findWhere($scope.dogprice, {id:dogprice.id}));
            });
        }
    };
    $scope.open = function (p) {
        var modalInstance = $modal.open({
            templateUrl: 'app/partials/dogpriceedit.html',
            controller: 'dogpriceEditCtrl',
            resolve: {
                item: function () {
                    return p;
                }
            }
        });
        modalInstance.result.then(function(selectedObject) {
            if(selectedObject.save == "insert"){
                $scope.dogprice.push(selectedObject);
                $scope.dogprice = $filter('orderBy')($scope.dogprice, 'id', 'reverse');

            }else if(selectedObject.save == "update"){
                p.label = selectedObject.label;
                p.price = selectedObject.price;
            }
        });
    };
});
app.controller('dogpriceEditCtrl', function ($scope, $modalInstance, item, Data) {

    $scope.dogprice = angular.copy(item);

    $scope.title = (item.id > 0) ? 'Edit Item' : 'Add Item';
    $scope.buttonText = (item.id > 0) ? 'Update Item' : 'Add New Item';

    $scope.cancel = function () {
        $modalInstance.dismiss('Close');
    };

    var original = item;
    $scope.isClean = function() {
        return angular.equals(original, $scope.product);
    }
    $scope.saveDogPrice = function (dogprice) {
        if(isNaN(dogprice.price)){
            $scope.dogprice_form.price.$invalid = true;
        }else{
            if(dogprice.id > 0){
                Data.put('dogpricefactors/'+dogprice.id, dogprice).then(function (result) {
                    if(result.status != 'error'){
                        var x = angular.copy(dogprice);
                        x.save = 'update';
                        $modalInstance.close(x);
                    }else{
                        console.log(result);
                    }
                });
            }else{
                Data.post('dogpricefactors', dogprice).then(function (result) {
                    if(result.status != 'error'){
                        var x = angular.copy(dogprice);
                        x.save = 'insert';
                        x.id = result.data;
                        $modalInstance.close(x);
                    }else{
                        console.log(result);
                    }
                });
            }
        }

    };
});

app.controller('catPriceCtrl',function($scope, $rootScope , $route, $routeParams ,$modal, $filter, $location, Data){
    $scope.catprice = {}

    Data.get('catpricefactors').then(function (data) {
        $scope.catprice = data.data;
    });

    $scope.deletePrice = function(catprice){
        if(confirm("Are you sure to remove the product")){
            Data.delete("catpricefactors/"+catprice.id).then(function(result){
                $scope.catprice = _.without($scope.catprice, _.findWhere($scope.catprice, {id:catprice.id}));
            });
        }
    };
    $scope.open = function (p) {
        var modalInstance = $modal.open({
            templateUrl: 'app/partials/catpriceedit.html',
            controller: 'catpriceEditCtrl',
            resolve: {
                item: function () {
                    return p;
                }
            }
        });
        modalInstance.result.then(function(selectedObject) {
            if(selectedObject.save == "insert"){
                console.log(selectedObject);
                $scope.catprice.push(selectedObject);
                $scope.catprice = $filter('orderBy')($scope.catprice, 'id', 'reverse');

            }else if(selectedObject.save == "update"){
                p.label = selectedObject.label;
                p.price = selectedObject.price;
            }
        });
    };
});
app.controller('catpriceEditCtrl', function ($scope, $modalInstance, item, Data) {

    $scope.catprice = angular.copy(item);

    $scope.title = (item.id > 0) ? 'Edit Item' : 'Add Item';
    $scope.buttonText = (item.id > 0) ? 'Update Item' : 'Add New Item';

    $scope.cancel = function () {
        $modalInstance.dismiss('Close');
    };

    var original = item;
    $scope.isClean = function() {
        return angular.equals(original, $scope.product);
    }
    $scope.savecatPrice = function (catprice) {
        if(isNaN(catprice.price)){
            $scope.catprice_form.price.$invalid = true;
        }else{
            if(catprice.id > 0){
                Data.put('catpricefactors/'+catprice.id, catprice).then(function (result) {
                    if(result.status != 'error'){
                        var x = angular.copy(catprice);
                        x.save = 'update';
                        $modalInstance.close(x);
                    }else{
                        console.log(result);
                    }
                });
            }else{
                Data.post('catpricefactors', catprice).then(function (result) {
                    if(result.status != 'error'){
                        var x = angular.copy(catprice);
                        x.save = 'insert';
                        x.id = result.data;
                        $modalInstance.close(x);
                    }else{
                        console.log(result);
                    }
                });
            }
        }

    };
});

/* DOG BREED */

app.controller('dogbreedCtrl',function($scope, $rootScope , $route, $routeParams ,$modal, $filter, $location, Data){
    $scope.dogbreed = {}

    Data.get('dogbreed').then(function (data) {
        $scope.dogbreed = data.data;
    });

    $scope.deletePrice = function(dogbreed){
        if(confirm("Are you sure to remove the product")){
            Data.delete("dogbreed/"+dogbreed.id).then(function(result){
                $scope.dogbreed = _.without($scope.dogbreed, _.findWhere($scope.dogbreed, {id:dogbreed.id}));
            });
        }
    };
    $scope.open = function (p) {
        var modalInstance = $modal.open({
            templateUrl: 'app/partials/dogbreededit.html',
            controller: 'dogbreedEditCtrl',
            resolve: {
                item: function () {
                    return p;
                }
            }
        });
        modalInstance.result.then(function(selectedObject) {
            if(selectedObject.save == "insert"){
                console.log(selectedObject);
                $scope.dogbreed.push(selectedObject);
                $scope.dogbreed = $filter('orderBy')($scope.dogbreed, 'id', 'reverse');

            }else if(selectedObject.save == "update"){
                p.label = selectedObject.label;
                p.value = selectedObject.value;
            }
        });
    };
});
app.controller('dogbreedEditCtrl', function ($scope, $modalInstance, item, Data) {

    $scope.dogbreed = angular.copy(item);

    $scope.title = (item.id > 0) ? 'Edit Item' : 'Add Item';
    $scope.buttonText = (item.id > 0) ? 'Update Item' : 'Add New Item';

    $scope.cancel = function () {
        $modalInstance.dismiss('Close');
    };

    var original = item;
    $scope.isClean = function() {
        return angular.equals(original, $scope.product);
    }
    $scope.savedogbreed = function (dogbreed) {
        if(dogbreed.id > 0){
            Data.put('dogbreed/'+dogbreed.id, dogbreed).then(function (result) {
                if(result.status != 'error'){
                    var x = angular.copy(dogbreed);
                    x.save = 'update';
                    $modalInstance.close(x);
                }else{
                    console.log(result);
                }
            });
        }else{
            Data.post('dogbreed', dogbreed).then(function (result) {
                if(result.status != 'error'){
                    var x = angular.copy(dogbreed);
                    x.save = 'insert';
                    x.id = result.data;
                    $modalInstance.close(x);
                }else{
                    console.log(result);
                }
            });
            }
    };
});

/* CAT BREED */

app.controller('catbreedCtrl',function($scope, $rootScope , $route, $routeParams ,$modal, $filter, $location, Data){
    $scope.catbreed = {}

    Data.get('catbreed').then(function (data) {
        $scope.catbreed = data.data;
    });

    $scope.deletePrice = function(catbreed){
        if(confirm("Are you sure to remove the product")){
            Data.delete("catbreed/"+catbreed.id).then(function(result){
                $scope.catbreed = _.without($scope.catbreed, _.findWhere($scope.catbreed, {id:catbreed.id}));
            });
        }
    };
    $scope.open = function (p) {
        var modalInstance = $modal.open({
            templateUrl: 'app/partials/catbreededit.html',
            controller: 'catbreedEditCtrl',
            resolve: {
                item: function () {
                    return p;
                }
            }
        });
        modalInstance.result.then(function(selectedObject) {
            if(selectedObject.save == "insert"){
                console.log(selectedObject);
                $scope.catbreed.push(selectedObject);
                $scope.catbreed = $filter('orderBy')($scope.catbreed, 'id', 'reverse');

            }else if(selectedObject.save == "update"){
                p.label = selectedObject.label;
                p.value = selectedObject.value;
            }
        });
    };
});
app.controller('catbreedEditCtrl', function ($scope, $modalInstance, item, Data) {

    $scope.catbreed = angular.copy(item);

    $scope.title = (item.id > 0) ? 'Edit Item' : 'Add Item';
    $scope.buttonText = (item.id > 0) ? 'Update Item' : 'Add New Item';

    $scope.cancel = function () {
        $modalInstance.dismiss('Close');
    };

    var original = item;
    $scope.isClean = function() {
        return angular.equals(original, $scope.product);
    }
    $scope.savecatbreed = function (catbreed) {
        if(catbreed.id > 0){
            Data.put('catbreed/'+catbreed.id, catbreed).then(function (result) {
                if(result.status != 'error'){
                    var x = angular.copy(catbreed);
                    x.save = 'update';
                    $modalInstance.close(x);
                }else{
                    console.log(result);
                }
            });
        }else{
            Data.post('catbreed', catbreed).then(function (result) {
                if(result.status != 'error'){
                    var x = angular.copy(catbreed);
                    x.save = 'insert';
                    x.id = result.data;
                    $modalInstance.close(x);
                }else{
                    console.log(result);
                }
            });
        }


    };
});

/* Health Questions */

app.controller('healthquestionCtrl',function($scope, $rootScope , $route, $routeParams ,$modal, $filter, $location, Data){
    $scope.healthquestion = {}

    Data.get('healthquestions').then(function (data) {
        $scope.healthquestion = data.data;
    });

    $scope.deleteValue = function(healthquestion){
        if(confirm("Are you sure to remove the product")){
            Data.delete("healthquestions/"+healthquestion.id).then(function(result){
                $scope.healthquestion = _.without($scope.healthquestion, _.findWhere($scope.healthquestion, {id:healthquestion.id}));
            });
        }
    };
    $scope.open = function (p) {
        var modalInstance = $modal.open({
            templateUrl: 'app/partials/questions/healthedit.html',
            controller: 'healthquestionEditCtrl',
            resolve: {
                item: function () {
                    return p;
                }
            }
        });
        modalInstance.result.then(function(selectedObject) {
            if(selectedObject.save == "insert"){
                $scope.healthquestion.push(selectedObject);
                $scope.healthquestion = $filter('orderBy')($scope.healthquestion, 'id', 'reverse');

            }else if(selectedObject.save == "update"){
                p.label = selectedObject.label;
                p.value = selectedObject.value;
            }
        });
    };
});
app.controller('healthquestionEditCtrl', function ($scope, $modalInstance, item, Data) {

    $scope.healthquestion = angular.copy(item);

    $scope.title = (item.id > 0) ? 'Edit Item' : 'Add Item';
    $scope.buttonText = (item.id > 0) ? 'Update Item' : 'Add New Item';

    $scope.cancel = function () {
        $modalInstance.dismiss('Close');
    };

    var original = item;
    $scope.isClean = function() {
        return angular.equals(original, $scope.product);
    }
    $scope.savehealthquestion = function (healthquestion) {
        if(healthquestion.id > 0){
            Data.put('healthquestions/'+healthquestion.id, healthquestion).then(function (result) {
                if(result.status != 'error'){
                    var x = angular.copy(healthquestion);
                    x.save = 'update';
                    $modalInstance.close(x);
                }else{
                    console.log(result);
                }
            });
        }else{
            Data.post('healthquestions', healthquestion).then(function (result) {
                if(result.status != 'error'){
                    var x = angular.copy(healthquestion);
                    x.save = 'insert';
                    x.id = result.data;
                    $modalInstance.close(x);
                }else{
                    console.log(result);
                }
            });
        }


    };
});

/* Cat Questions */

app.controller('catquestionsCtrl',function($scope, $rootScope , $route, $routeParams ,$modal, $filter, $location, Data){
    $scope.catquestions = {}

    Data.get('catquestions').then(function (data) {
        $scope.catquestions = data.data;
    });

    $scope.deletePrice = function(catquestions){
        if(confirm("Are you sure to remove the product")){
            Data.delete("catquestions/"+catquestions.id).then(function(result){
                $scope.catquestions = _.without($scope.catquestions, _.findWhere($scope.catquestions, {id:catquestions.id}));
            });
        }
    };
    $scope.open = function (p) {
        var modalInstance = $modal.open({
            templateUrl: 'app/partials/questions/catedit.html',
            controller: 'catquestionsEditCtrl',
            resolve: {
                item: function () {
                    return p;
                }
            }
        });
        modalInstance.result.then(function(selectedObject) {
            if(selectedObject.save == "insert"){
                $scope.catquestions.push(selectedObject);
                $scope.catquestions = $filter('orderBy')($scope.catquestions, 'id', 'reverse');

            }else if(selectedObject.save == "update"){
                p.label = selectedObject.label;
                p.value = selectedObject.value;
            }
        });
    };
});
app.controller('catquestionsEditCtrl', function ($scope, $modalInstance, item, Data) {

    $scope.catquestions = angular.copy(item);

    $scope.title = (item.id > 0) ? 'Edit Item' : 'Add Item';
    $scope.buttonText = (item.id > 0) ? 'Update Item' : 'Add New Item';

    $scope.cancel = function () {
        $modalInstance.dismiss('Close');
    };

    var original = item;
    $scope.isClean = function() {
        return angular.equals(original, $scope.product);
    }
    $scope.savecatquestions = function (catquestions) {
        if(catquestions.id > 0){
            Data.put('catquestions/'+catquestions.id, catquestions).then(function (result) {
                if(result.status != 'error'){
                    var x = angular.copy(catquestions);
                    x.save = 'update';
                    $modalInstance.close(x);
                }else{
                    console.log(result);
                }
            });
        }else{
            Data.post('catquestions', catquestions).then(function (result) {
                if(result.status != 'error'){
                    var x = angular.copy(catquestions);
                    x.save = 'insert';
                    x.id = result.data;
                    $modalInstance.close(x);
                }else{
                    console.log(result);
                }
            });
        }


    };
});

/* illness Questions */

app.controller('illnessquestionCtrl',function($scope, $rootScope , $route, $routeParams ,$modal, $filter, $location, Data){
    $scope.illnessquestion = {}

    Data.get('illnessquestions').then(function (data) {
        $scope.illnessquestion = data.data;
    });

    $scope.deleteValue = function(illnessquestion){
        if(confirm("Are you sure to remove the product")){
            Data.delete("illnessquestions/"+illnessquestion.id).then(function(result){
                $scope.illnessquestion = _.without($scope.illnessquestion, _.findWhere($scope.illnessquestion, {id:illnessquestion.id}));
            });
        }
    };
    $scope.open = function (p) {
        var modalInstance = $modal.open({
            templateUrl: 'app/partials/questions/illnessedit.html',
            controller: 'illnessquestionEditCtrl',
            resolve: {
                item: function () {
                    return p;
                }
            }
        });
        modalInstance.result.then(function(selectedObject) {
            if(selectedObject.save == "insert"){
                $scope.illnessquestion.push(selectedObject);
                $scope.illnessquestion = $filter('orderBy')($scope.illnessquestion, 'id', 'reverse');

            }else if(selectedObject.save == "update"){
                p.label = selectedObject.label;
                p.value = selectedObject.value;
            }
        });
    };
});
app.controller('illnessquestionEditCtrl', function ($scope, $modalInstance, item, Data) {

    $scope.illnessquestion = angular.copy(item);

    $scope.title = (item.id > 0) ? 'Edit Item' : 'Add Item';
    $scope.buttonText = (item.id > 0) ? 'Update Item' : 'Add New Item';

    $scope.cancel = function () {
        $modalInstance.dismiss('Close');
    };

    var original = item;
    $scope.isClean = function() {
        return angular.equals(original, $scope.product);
    }
    $scope.saveillnessquestion = function (illnessquestion) {
        if(illnessquestion.id > 0){
            Data.put('illnessquestions/'+illnessquestion.id, illnessquestion).then(function (result) {
                if(result.status != 'error'){
                    var x = angular.copy(illnessquestion);
                    x.save = 'update';
                    $modalInstance.close(x);
                }else{
                    console.log(result);
                }
            });
        }else{
            Data.post('illnessquestions', illnessquestion).then(function (result) {
                if(result.status != 'error'){
                    var x = angular.copy(illnessquestion);
                    x.save = 'insert';
                    x.id = result.data;
                    $modalInstance.close(x);
                }else{
                    console.log(result);
                }
            });
        }


    };
});

/* General Questions */

app.controller('generalquestionCtrl',function($scope, $rootScope , $route, $routeParams ,$modal, $filter, $location, Data){
    $scope.generalquestion = {}

    Data.get('generalquestions').then(function (data) {
        $scope.generalquestion = data.data;
    });

    $scope.deleteValue = function(generalquestion){
        if(confirm("Are you sure to remove the product")){
            Data.delete("generalquestions/"+generalquestion.id).then(function(result){
                $scope.generalquestion = _.without($scope.generalquestion, _.findWhere($scope.generalquestion, {id:generalquestion.id}));
            });
        }
    };
    $scope.open = function (p) {
        var modalInstance = $modal.open({
            templateUrl: 'app/partials/questions/generaledit.html',
            controller: 'generalquestionEditCtrl',
            resolve: {
                item: function () {
                    return p;
                }
            }
        });
        modalInstance.result.then(function(selectedObject) {
            if(selectedObject.save == "insert"){
                $scope.generalquestion.push(selectedObject);
                $scope.generalquestion = $filter('orderBy')($scope.generalquestion, 'id', 'reverse');

            }else if(selectedObject.save == "update"){
                p.label = selectedObject.label;
                p.value = selectedObject.value;
            }
        });
    };
});
app.controller('generalquestionEditCtrl', function ($scope, $modalInstance, item, Data) {

    $scope.generalquestion = angular.copy(item);

    $scope.title = (item.id > 0) ? 'Edit Item' : 'Add Item';
    $scope.buttonText = (item.id > 0) ? 'Update Item' : 'Add New Item';

    $scope.cancel = function () {
        $modalInstance.dismiss('Close');
    };

    var original = item;
    $scope.isClean = function() {
        return angular.equals(original, $scope.product);
    }
    $scope.savegeneralquestion = function (generalquestion) {
        if(generalquestion.id > 0){
            Data.put('generalquestions/'+generalquestion.id, generalquestion).then(function (result) {
                if(result.status != 'error'){
                    var x = angular.copy(generalquestion);
                    x.save = 'update';
                    $modalInstance.close(x);
                }else{
                    console.log(result);
                }
            });
        }else{
            Data.post('generalquestions', generalquestion).then(function (result) {
                if(result.status != 'error'){
                    var x = angular.copy(generalquestion);
                    x.save = 'insert';
                    x.id = result.data;
                    $modalInstance.close(x);
                }else{
                    console.log(result);
                }
            });
        }


    };
});

/* Messages Questions */

app.controller('messagesCtrl',function($scope, $rootScope , $route, $routeParams ,$modal, $filter, $location, Data){
    $scope.messages = {}

    Data.get('messages').then(function (data) {
        $scope.messages = data.data;
    });

    $scope.deleteValue = function(messages){
        if(confirm("Are you sure to remove the product")){
            Data.delete("messages/"+messages.id).then(function(result){
                $scope.messages = _.without($scope.messages, _.findWhere($scope.messages, {id:messages.id}));
            });
        }
    };
    $scope.open = function (p) {
        var modalInstance = $modal.open({
            templateUrl: 'app/partials/questions/messagesedit.html',
            controller: 'messagesEditCtrl',
            resolve: {
                item: function () {
                    return p;
                }
            }
        });
        modalInstance.result.then(function(selectedObject) {
            if(selectedObject.save == "insert"){
                $scope.messages.push(selectedObject);
                $scope.messages = $filter('orderBy')($scope.messages, 'id', 'reverse');

            }else if(selectedObject.save == "update"){
                p.label = selectedObject.label;
                p.value = selectedObject.value;
            }
        });
    };
});
app.controller('messagesEditCtrl', function ($scope, $modalInstance, item, Data) {

    $scope.messages = angular.copy(item);

    $scope.title = (item.id > 0) ? 'Edit Item' : 'Add Item';
    $scope.buttonText = (item.id > 0) ? 'Update Item' : 'Add New Item';

    $scope.cancel = function () {
        $modalInstance.dismiss('Close');
    };

    var original = item;
    $scope.isClean = function() {
        return angular.equals(original, $scope.product);
    }
    $scope.savemessages = function (messages) {
        if(messages.id > 0){
            Data.put('messages/'+messages.id, messages).then(function (result) {
                if(result.status != 'error'){
                    var x = angular.copy(messages);
                    x.save = 'update';
                    $modalInstance.close(x);
                }else{
                    console.log(result);
                }
            });
        }else{
            Data.post('messages', messages).then(function (result) {
                if(result.status != 'error'){
                    var x = angular.copy(messages);
                    x.save = 'insert';
                    x.id = result.data;
                    $modalInstance.close(x);
                }else{
                    console.log(result);
                }
            });
        }


    };
});

