'use strict';

/* Directives */
angular.module('myApp.directives', []).
// Our signle directive that calls a function in our controller
  directive('lookupLocation', [function() {
    return function(scope, elm, attrs) {
      elm.bind("click", function() {
      	scope.$apply(attrs.lookupLocation);
      })
    };
  }]);
