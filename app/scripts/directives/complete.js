'use strict';

angular.module('communiTaskApp')
.directive('complete', function ($location, $timeout, $firebase) {
    return {
        templateUrl: 'views/complete.html',
        restrict: 'AE',
        scope: {
            task: '='
        },
        link: function postLink($scope, element, attrs) {

            $scope.submitComplete = function() {

                $scope.task.$remove().then(function() {
                    $location.path('/');
                });
            };
        }
    };
});
