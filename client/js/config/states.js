angular.module('states').config(function($stateProvider) {
    var states = 
    [
      {
        name: 'hello',
        url: '/hello',
        templateUrl: '../../pages/home.html',
        controller: 'homeController as HC',      
      },
  
      {
        name: 'about',
        url: '/about',
        templateUrl: '../../pages/about.html'
      },
      {
        name: 'users',
        url: '/users',
        templateUrl: '../../pages/users.html',
        controller: 'userController as UC'
      }
  ]
  
    //registers each state with angular
    states.forEach(function(state) {
      $stateProvider.state(state);
    });
  
  });