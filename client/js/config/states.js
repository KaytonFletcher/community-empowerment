angular.module('states').config(function($stateProvider) {
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
        templateUrl: '../../pages/accountPages/signin.html',
        controller: 'authController as AC'
      },
	    {
        name: 'createacct',
        url: '/createacct',
        templateUrl: '../../pages/accountPages/createacct.html', 
        controller: 'authController as AC'
      },
	    {
        name: 'resetpsw',
        url: '/resetpsw',
        templateUrl: '../../pages/accountPages/resetpsw.html'
      },
	    
      {
        name: 'account',
        url: '/account',
        templateUrl: '../../pages/accountPages/account.html'
      },
      {
        name: 'userAccount',
        url: '/account/user',
        templateUrl: '../../pages/accountPages/user.html',
        controller: 'userController as UC',
        data: {
          authorization: true,
          redirectTo: 'signin'
        }     
      },
      {
        name: 'adminAccount',
        url: '/account/admin',
        templateUrl: '../../pages/accountPages/admin.html' ,
        controller: 'userController as UC',
        data: {
          authorization: true,
          redirectTo: 'signin'
        }
      },
      {
        name: 'termsandconditions',
        url: '/termsandconditions',
        templateUrl: '../../pages/termsandconditions.html'
      }
  ]
  
    //registers each state with angular
    states.forEach(function(state) {
      $stateProvider.state(state);
    });

  });