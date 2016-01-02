'use strict';

/**
 * @ngdoc overview
 * @name paridhanApp
 * @description
 * # paridhanApp
 *
 * Main module of the application.
 */
angular
  .module('paridhanApp', [
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'angular.filter',
    'ui.bootstrap',
    'ui.bootstrap.modal'
  ])
  .config(function ($routeProvider) {
    function getCategoryId($route) {
        return $route.current.params.categoryId;
    }
    function getItemId($route) {
        return $route.current.params.itemId;
    }
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main',
        'class': 'homePage',
      })
      .when('/mens', {
        templateUrl: 'views/mens.html',
        controller: 'MensCtrl',
        controllerAs: 'mens',
        'class': 'categoryPage',
      })
      .when('/style/:categoryId', {
        templateUrl: 'views/style.html',
        controller: 'StyleCtrl',
        controllerAs: 'style',
        'class': 'categoryPage',
        resolve: {
            categoryId: getCategoryId
        }
      })
      .when('/singleProduct/:itemId', {
        templateUrl: 'views/singleproduct.html',
        controller: 'SingleproductCtrl',
        controllerAs: 'singleProduct',
        'class': 'categoryPage',
        resolve: {
            itemId: getItemId
        }
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login',
        'class': 'categoryPage'
      })
      .when('/privacy', {
        templateUrl: 'views/privacy.html',
        controller: 'PrivacyCtrl',
        controllerAs: 'privacy',
        'class': 'categoryPage',
      })
      .when('/grab', {
        templateUrl: 'views/grab.html',
        controller: 'GrabCtrl',
        controllerAs: 'grab',
        'class': 'categoryPage',
      })
      .otherwise({
        redirectTo: '/'
      });
  });
