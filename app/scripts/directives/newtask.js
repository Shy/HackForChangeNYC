'use strict';

angular.module('communiTaskApp')
.directive('newTask', function ($firebase, $location) {
    return {
      templateUrl: 'views/new.html',
      restrict: 'AE',
      link: function postLink($scope, element, attrs) {
        var taskRef = new Firebase('https://torid-fire-4640.firebaseio.com/task');
        $scope.tasks = $firebase(taskRef);

        $scope.addTask = function() {
            $scope.tasks.$add({
                desc: $scope.newTaskDesc,
                completed: false,
                gLat: $scope.gLat || undefined,
                gLong: $scope.gLong || undefined,
                city: $scope.manualLocation,
                images: (function() {
                    var a = [];
                    angular.forEach($scope.images, function(img) {
                        a.push({
                            url: img.resized.dataURL,
                            type: img.resized.type
                        });
                    });
                    return a;
                }())
            }).then(function() {
                $location.url('/');
            });
        };

        $scope.autoLocation = function() {
            navigator.geolocation.getCurrentPosition(function(loc) {
                console.log(loc);
                $scope.gLat = loc.coords.latitude;
                $scope.gLong = loc.coords.longitude;

                $scope.manualLocation = $scope.gLat + ', ' + $scope.gLong;
                $scope.$apply();
            });
        };
      }
    };
});

