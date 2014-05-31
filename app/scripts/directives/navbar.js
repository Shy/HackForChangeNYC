'use strict';

angular.module('communiTaskApp')
.directive('navbar', function () {
    return {
      templateUrl: 'views/navbar.html',
      restrict: 'AE',
      link: function postLink($scope, element, attrs) {

        var taskRef = new Firebase('https://torid-fire-4640.firebaseio.com/task');

        var auth = new FirebaseSimpleLogin(taskRef, function(error, user) {
            if (error) {
                // an error occurred while attempting login
                console.log(error);
            } else if (user) {
                $scope.user = user;
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

      }
    };
});
