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
    .when('/task', {
        templateUrl: 'view/task.html',
        controller: 'TaskCtrl'
    })
    .otherwise({
        redirectTo: '/'
    });
});
