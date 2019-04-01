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
        onEnter: function($modal){
            var modalInstance;
            modalInstance = $modal.open( { templateUrl: '../../pages/accountPages/signin.html'  });
            console.log(modalInstance);

        }
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
          redirectTo: 'signin' ,
          authorization: true,
          admin: false
        }     
      },
      {
        name: 'adminAccount',
        url: '/account/admin',
        templateUrl: '../../pages/accountPages/admin.html' ,
        controller: 'userController as UC',
        data: {
          redirectTo: 'signin' ,
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


/*Tabs for Resources Page*/
function openPage(pageName, elmnt, color) {
	// Hide all elements with class="tabcontent" by default */
	var i, tabcontent, tablinks;
	tabcontent = document.getElementsByClassName("tabcontent");
	
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}

	// Remove the background color of all tablinks/buttons
	tablinks = document.getElementsByClassName("tablink");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].style.backgroundColor = "";
	}

	// Show the specific tab content
	document.getElementById(pageName).style.display = "block";

	// Add the specific color to the button used to open the tab content
	elmnt.style.backgroundColor = color;
}