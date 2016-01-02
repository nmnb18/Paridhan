'use strict';

/**
 * @ngdoc directive
 * @name ptTailorApp.directive:mainHeader
 * @description
 * # header
 */
angular.module('paridhanApp')
    .directive('mainHeader', function ($modal, $log) {
    return {
        templateUrl: '../views/partials/header.html',
        restrict: 'E',
        link: function postLink(scope, element) {
            
        },
        controller: ['$scope', '$log', function($scope, $log) {

        }]
    };
});
