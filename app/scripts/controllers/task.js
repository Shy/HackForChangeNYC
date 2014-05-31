'use strict';

angular.module('communiTaskApp')
.controller('TaskCtrl', function ($scope, $firebase, $routeParams) {
    $scope.id = $routeParams.id;
    var taskRef = new Firebase('https://torid-fire-4640.firebaseio.com/task/' + $scope.id);

    $scope.tasks = $firebase(taskRef);

    $scope.completeTask = function() {

    };

});
