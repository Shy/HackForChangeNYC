'use strict';

angular.module('communiTaskApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'firebase',
    'imageupload'
]).config(function ($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
    })
    .when('/new', {
        templateUrl: 'views/new.html',
        controller: 'NewCtrl'
    })
    .when('/task/:id', {
        templateUrl: 'views/task.html',
        controller: 'TaskCtrl'
    })
    .when('/complete', {
        templateUrl: 'view/complete.html',
        controller: 'CompleteCtrl'
    })
    .when('/leaderboard', {
        templateUrl: 'view/leaderboard.html',
        controller: 'Leaderboard1Ctrl'
    })
    .otherwise({
        redirectTo: '/'
    });
});
