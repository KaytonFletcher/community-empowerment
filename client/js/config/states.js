angular.module('states').config(function ($stateProvider) {
  var states =
    [
      {
        name: 'home',
        url: '/',
        templateUrl: '../../pages/home.html',   
      },
      {
        name: 'about',
        url: '/about',
        templateUrl: '../../pages/about.html'
      },
      {
        name: 'understand',
        url: '/understand',
        templateUrl: '../../pages/understand.html'
      },
      {
        name: 'research',
        url: '/research',
        templateUrl: '../../pages/research.html'
      },
      {
        name: 'entRes',
        url: '/entRes',
        templateUrl: '../../pages/entRes.html'
      },
      {
        name: 'affil',
        url: '/affil',
        templateUrl: '../../pages/affil.html'
      },
      {
        name: 'blog',
        url: '/blog',
        templateUrl: '../../pages/blog.html'
      },
      {
        name: 'commentary',
        url: '/commentary',
        templateUrl: '../../pages/commentary.html'
      },
      {
        name: 'calendar',
        url: '/calendar',
        templateUrl: '../../pages/calendar.html'
      },
	    {
        name: 'signin',
        url: '/signin',
        templateUrl: '../../pages/signin.html'
      },
	    {
        name: 'createacct',
        url: '/createacct',
        templateUrl: '../../pages/createacct.html',
        controller: 'userController as UC'
      },
	    {
        name: 'resetpsw',
        url: '/resetpsw',
        templateUrl: '../../pages/resetpsw.html'
      },
	    {
        name: 'termsandconditions',
        url: '/termsandconditions',
        templateUrl: '../../pages/termsandconditions.html'
      },
      {
        name: 'account',
        url: '/account',
        templateUrl: '../../pages/account.html' ,
        controller: 'userController as UC'
      }
    ]

  //registers each state with angular
  states.forEach(function (state) {
    $stateProvider.state(state);
  });

});