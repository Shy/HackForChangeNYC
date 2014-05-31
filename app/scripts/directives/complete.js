'use strict';

angular.module('communiTaskApp')
.directive('complete', function () {
    return {
        templateUrl: 'views/complete.html',
        restrict: 'AE',
        link: function postLink(scope, element, attrs) {

        }
    };
});
