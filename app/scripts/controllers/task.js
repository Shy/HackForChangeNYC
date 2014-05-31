'use strict';

angular.module('communiTaskApp')
.controller('TaskCtrl', function ($scope, $firebase) {
    var taskRef = new Firebase('https://torid-fire-4640.firebaseio.com/task');

    $scope.tasks = $firebase(taskRef);

});
