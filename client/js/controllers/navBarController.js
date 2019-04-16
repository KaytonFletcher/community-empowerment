angular.module('users').controller('NavbarCtrl', function ($scope, Authenticate) {

    $scope.signoutPages = [
                    {'name': 'Home', 'ref': 'home'},
                   // {'name': 'Resources', 'ref': 'entRes'},
				   // {'name': 'Research', 'ref': 'research'},
                    {'name': 'Calendar', 'ref': 'calendar'},
                    {'name': 'Affiliates and Partners', 'ref': 'affil'},
                ];

    $scope.signinPages = [
        {'name': 'Home', 'ref': 'home'},
        {'name': 'Resources', 'ref': 'entRes'},
		{'name': 'Research', 'ref': 'research'},
        {'name': 'Calendar', 'ref': 'calendar'},
        {'name': 'Affiliates and Partners', 'ref': 'affil'},
        {'name': 'Account', 'ref': 'account'},
    ];
    //Removed   {'name': 'About Us', 'ref': 'home/abtUs'}, in both $scopes and added an href in index 
    //To a location further down the home page

});
                
