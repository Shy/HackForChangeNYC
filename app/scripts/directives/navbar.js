'use strict';

angular.module('communiTaskApp')
.directive('navbar', function () {
    return {
      templateUrl: 'views/navbar.html',
      restrict: 'AE',
      link: function postLink(scope, element, attrs) {

      }
    };
});
