// Code goes here

var myApp = angular.module('myApp', ['angularUtils.directives.dirPagination']);

function MyController($scope, $http) {

  $scope.currentPage = 1;
  $scope.pageSize = 20;
  $scope.cart = [];
 
 $scope.getTotal = function(){
    var total = 0;
    for(var i = 0; i < $scope.cart.length; i++){
        var product = $scope.cart[i];
        total += (product.Price);
    }
    return total;
}

 $scope.addItem = function (item,pr) {

        $scope.cart.push({
            Name: item.Name,
            Price:pr.Value
        });
    };

$scope.removeItem = function(item) { 
  var index = $scope.cart.indexOf(item);
  $scope.cart.splice(index, 1);     
}

 $http.get("entity.json")
    .then(function(response) {
        $scope.entity = response.data;
    });
	
	
  $scope.pageChangeHandler = function(num) {
      
  };
}

function OtherController($scope) {
  $scope.pageChangeHandler = function(num) {
  
  };
}




myApp.controller('MyController', MyController);
myApp.controller('OtherController', OtherController);
