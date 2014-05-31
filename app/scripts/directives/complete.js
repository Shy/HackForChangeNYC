'use strict';

angular.module('communiTaskApp')
.directive('complete', function ($location, $timeout) {
    return {
        templateUrl: 'views/complete.html',
        restrict: 'AE',
        link: function postLink(scope, element, attrs) {
            scope.submitComplete = function() {
                $timeout(function() {
                    $location.path('/');
                }, 500);
            };
        }
    };
});
