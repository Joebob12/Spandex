'use strict';

/* Directives */


angular.module('myApp.directives', []).
  directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }]).
  directive('lookupLocation', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.bind("click", function() {
      	scope.$apply(attrs.lookupLocation);
      })
    };
  }]);
