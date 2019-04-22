angular.module('states').config(function ($stateProvider) {
  var states =
    [
      {
          name: "otherwise", 
          url: "*path",
          templateUrl: "../../pages/home.html"
      },
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
        name: 'announcements',
        url: '/announcements',
        templateUrl: '../../pages/announcements.html'
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
        templateUrl: '../../pages/calendar.html',
        controller: 'calController as CC'
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
        templateUrl: '../../pages/accountPages/account.html',
        redirectTo: 'details'
      },
      {
        name: 'allUsers',
        parent: 'account',
        templateUrl: '../../pages/accountPages/allUsers.html',
        data: {
          redirectTo: 'home' ,
          authorization: true,
          admin: true
        }     
      },
      {
        name: 'details',
        parent: 'account',
        templateUrl: '../../pages/accountPages/details.html',
        data: {
          redirectTo: 'home' ,
          authorization: true,
          admin: false
        }   
      },
      {
        name: 'userDetails',
        parent: 'account',
        templateUrl: '../../pages/accountPages/userDetails.html',
        data: {
          redirectTo: 'home' ,
          authorization: true,
          admin: true
        }   
      },
      {
        name: 'manageEvents',
        parent: 'account',
        templateUrl: '../../pages/accountPages/eventManager.html',
        data: {
          redirectTo: 'home' ,
          authorization: true,
          admin: true
        }   
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