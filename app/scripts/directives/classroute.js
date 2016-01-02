'use strict';

/**
 * @ngdoc directive
 * @name ptTailorApp.directive:classRoute
 * @description
 * # classRoute
 */
 angular.module('paridhanApp')
    .directive('classRoute', function($rootScope) {
    return function(scope, elem, attr) {
        var previous = '';
        $rootScope.$on('$routeChangeSuccess', function(event, currentRoute) {
            var route = currentRoute.$$route;
            if(route) {
                var cls = route['class'];
                if(previous) {
                    attr.$removeClass(previous);
                }
                if(cls) {
                    previous = cls;
                    attr.$addClass(cls);
                }
            }
        });
    };
});
