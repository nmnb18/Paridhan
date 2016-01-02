'use strict';

/**
 * @ngdoc function
 * @name ptTailorApp.controller:SingleproductCtrl
 * @description
 * # SingleproductCtrl
 * Controller of the ptTailorApp
 */
angular.module('paridhanApp')
  .controller('SingleproductCtrl',['$scope', '$http','appUrl','itemId', function ($scope, $http, appUrl, itemId) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $http.get(appUrl + '/item/' + itemId).success(function(data) {
        $scope.item = data[0];
        $scope.item.actualPrice = parseInt($scope.item.price) + 100;
        console.log($scope.item);
    });
    $scope.grabIt = function() {
        location.href = "http://localhost:9000/#/grab";
    };
}]);
