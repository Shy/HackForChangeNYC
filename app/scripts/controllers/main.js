'use strict';

angular.module('communiTaskApp')
.controller('MainCtrl', function ($scope, $firebase) {
    var latestRef = new Firebase('https://torid-fire-4640.firebaseio.com/latest');
    var taskRef = new Firebase('https://torid-fire-4640.firebaseio.com/task');
    $scope.latest = $firebase(latestRef);

    $scope.addLatest = function() {
        $scope.latest.$add($scope.newLatest);
        $scope.newLatest = '';
    };


    var auth = new FirebaseSimpleLogin(taskRef, function(error, user) {
        if (error) {
            // an error occurred while attempting login
            console.log(error);
        } else if (user) {
            // user authenticated with Firebase
            console.log('User ID: ' + user.uid + ', Provider: ' + user.provider);
        } else {
            // user is logged out
        }
    });

    $scope.login = function() {
        auth.login('facebook');
    };

});
