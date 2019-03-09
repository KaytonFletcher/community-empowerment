angular.module('states').config(function($stateProvider) {
    var states = 
    [
      {
        name: 'home',
        url: '/',
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
      },
	  {
        name: 'signin',
        url: '/signin',
        templateUrl: '../../pages/signin.html'
      },
  ]
  
    //registers each state with angular
    states.forEach(function(state) {
      $stateProvider.state(state);
    });
  
  });