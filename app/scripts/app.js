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
    'ui.bootstrap.modal',
    'ngMessages'
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
        title: 'Paridhan -  A complte Shop for Men',
        'class': 'homePage',
      })
      .when('/mens', {
        templateUrl: 'views/mens.html',
        controller: 'MensCtrl',
        title: 'Our Category - Your Choice | Paridhan',
        controllerAs: 'mens',
        'class': 'categoryPage',
      })
      .when('/style/:categoryId', {
        templateUrl: 'views/style.html',
        controller: 'StyleCtrl',
        title: 'Your Style | Paridhan',
        controllerAs: 'style',
        'class': 'categoryPage',
        resolve: {
            categoryId: getCategoryId
        }
      })
      .when('/singleProduct/:itemId', {
        templateUrl: 'views/singleproduct.html',
        controller: 'SingleproductCtrl',
        title: 'Product Detail | Paridhan',
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
        title: 'Login | Paridhan',
        'class': 'categoryPage'
      })
      .when('/privacy', {
        templateUrl: 'views/privacy.html',
        controller: 'PrivacyCtrl',
        controllerAs: 'privacy',
        title: 'Privacy | Paridhan',
        'class': 'categoryPage',
      })
      .when('/grab', {
        templateUrl: 'views/grab.html',
        controller: 'GrabCtrl',
        controllerAs: 'grab',
        title: 'Grab It | Paridhan',
        'class': 'categoryPage',
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .run(['$location', '$rootScope', function($location, $rootScope) {
        $rootScope.$on('$routeChangeSuccess', function(event, current) {
            window.scrollTo(0, 0);
            $rootScope.previousPage = $location.path();
            if (current.hasOwnProperty('$$route')) {
                $rootScope.title = current.$$route.title;
            }
        });
    }]);
