'use strict';

angular.module('communiTaskApp')
.controller('MainCtrl', function ($scope, $firebase) {
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


    var auth = new FirebaseSimpleLogin(taskRef, function(error, user) {
        if (error) {
            // an error occurred while attempting login
            console.log(error);
        } else if (user) {
            // user authenticated with Firebase
            console.log('User ID: ' + user.uid);
        } else {
            // user is logged out
        }
    });

    $scope.login = function() {
        auth.login('facebook', {
            rememberMe: true,
            scope: 'email'
        });
    };

});
