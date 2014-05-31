'use strict';

angular.module('communiTaskApp')
.controller('TaskCtrl', function ($scope, $firebase) {
    var taskRef = new Firebase('https://torid-fire-4640.firebaseio.com/task');

    $scope.tasks = $firebase(taskRef);

    $scope.addTask = function() {
        $scope.tasks.$add({
            desc: $scope.newTask,
            completed: false,
            gLat: 40.7127,
            gLong: 74.0059
        });
        $scope.newTask = '';
    };
});
