'use strict';

angular.module('communiTaskApp')
.controller('NewCtrl', function ($scope, $firebase, $location) {

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
                var a = angular.forEach($scope.images, function(img) {
                    return {img: img.dataUrl, type: img.type};
                });
                return a;
            }())
        });
    };

    $scope.autoLocation = function() {
        navigator.geolocation.getCurrentPosition(function(loc) {
            console.log(loc);
            $scope.gLat = loc.coords.latitude;
            $scope.gLong = loc.coords.longitude;

            $scope.manualLocation = $scope.gLat + ', ' + $scope.gLong;
        });
    };
});
