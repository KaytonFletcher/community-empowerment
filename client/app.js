angular.module('states', []);
// angular.module('users', []);

var app = angular.module('SpoderApp', ['ui.router', 'states']);

app.config(["$locationProvider" , function($locationProvider){
    $locationProvider.html5Mode(true);
}]);

