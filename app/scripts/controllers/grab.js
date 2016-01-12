'use strict';

/**
 * @ngdoc function
 * @name paridhanApp.controller:MensCtrl
 * @description
 * # MensCtrl
 * Controller of the paridhanApp
 */
angular.module('paridhanApp')
  .controller('GrabCtrl',['$scope', '$http', 'appUrl', function ($scope, $http, appUrl) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    //this = $scope;
    var social = angular.element(document.querySelector('#social'));
    var account = angular.element(document.querySelector('#account'));
    var delivery = angular.element(document.querySelector('#delivery'));
    var step1 = angular.element(document.querySelector('#step1'));
    var step2 = angular.element(document.querySelector('#step2'));
    var step3 = angular.element(document.querySelector('#step3'));
    //debugger;
    $scope.showSocialProfile = function() {
        social.removeAttr('disabled');
        social.css('opacity', 1);
        account.attr('disabled','');
        account.css('opacity',0.2);
        step2.addClass('active');
        step1.removeClass('active');
    };
    $scope.showAccountProfile = function() {
        account.removeAttr('disabled');
        account.css('opacity', 1);
        social.attr('disabled','');
        social.css('opacity',0.2);
        step1.addClass('active');
        step2.removeClass('active');
    };
    $scope.showDeliveryProfile = function() {
        delivery.removeAttr('disabled');
        delivery.css('opacity', 1);
        social.attr('disabled','');
        social.css('opacity',0.2);
        step3.addClass('active');
        step2.removeClass('active');
    };
    $scope.showBackSocialProfile = function() {
        social.removeAttr('disabled');
        social.css('opacity', 1);
        delivery.attr('disabled','');
        delivery.css('opacity',0.2);
        step2.addClass('active');
        step3.removeClass('active');
    };
    $scope.submitDetails = function(userData) {
        $http({
            method: 'POST',
            url: appUrl + '/save/userdata',
            data: userData,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }).success(function(data) {
            console.log(data);
        });
    };
}]);
