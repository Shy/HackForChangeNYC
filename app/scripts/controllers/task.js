'use strict';

angular.module('communiTaskApp')
.controller('TaskCtrl', function ($scope, $firebase, $routeParams) {
    $scope.id = $routeParams.id;
    console.log($scope.id);
    var taskRef = new Firebase('https://torid-fire-4640.firebaseio.com/task/' + $scope.id);

    $scope.task = $firebase(taskRef);

    $scope.completeTask = function() {
        console.log($scope);
    };

});
