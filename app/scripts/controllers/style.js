'use strict';

/**
 * @ngdoc function
 * @name ptTailorApp.controller:StyleCtrl
 * @description
 * # StyleCtrl
 * Controller of the ptTailorApp
 */
angular.module('paridhanApp')
  .controller('StyleCtrl',['$http','$scope','appUrl','categoryId','$timeout', function ($http, $scope, appUrl, categoryId, $timeout) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.selectedIndex = 0;
    $scope.loader = true;
    $scope.sortHighToLow = function(index, filter) {
        $scope.selectedIndex = index;
        $scope.priceFilter = filter;
    };
    $scope.sortLowToHigh = function(index, filter) {
        $scope.selectedIndex = index;
        $scope.priceFilter = filter;
    };
    $scope.sortNew = function(index) {
        $scope.selectedIndex = index;
    };
    $scope.sortPopular = function(index) {
        $scope.selectedIndex = index;
    };
    $http.get(appUrl + '/productsList/' + categoryId).success(function(data) {
        $scope.productsList = data.products;
        $scope.productsSize = data.productSize;
        $scope.productsLength= data.productLength;
        $scope.productsFit = data.productFit;
        showLoader();
    });

    function showLoader() {
        $timeout(function(){
            $scope.loader = false;
        },1000);
    }
    $scope.setFilterByLength = function(filter,e) {
        e.preventDefault();
        $scope.byLength = filter;
    };
    $scope.setFilterByFit = function(filter,e) {
        e.preventDefault();
        $scope.byFit = filter;
    };
    $scope.setFilterBySize = function(filter, e) {
        e.preventDefault();
        $scope.bySize = filter;
    };
}]);
