angular.module('states').config(function ($stateProvider) {
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
      {
        name: 'createacct',
        url: '/createacct',
        templateUrl: '../../pages/createacct.html'
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
        name: 'S',
        url: '/S',
        templateUrl: '../../pages/S.html'
      },
      {
        name: 'P',
        url: '/P',
        templateUrl: '../../pages/P.html'
      },
      {
        name: 'O',
        url: '/O',
        templateUrl: '../../pages/O.html'
      },
      {
        name: 'D',
        url: '/D',
        templateUrl: '../../pages/D.html'
      },
      {
        name: 'E',
        url: '/E',
        templateUrl: '../../pages/E.html'
      },
      {
        name: 'R',
        url: '/R',
        templateUrl: '../../pages/R.html'
      }
    ]

  //registers each state with angular
  states.forEach(function (state) {
    $stateProvider.state(state);
  });

});