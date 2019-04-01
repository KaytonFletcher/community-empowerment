angular.module('users').controller('NavbarCtrl', function ($scope, Authenticate) {

    $scope.signoutPages = [
                    {'name': 'Home', 'ref': 'home'},
                    {'name': 'About Us', 'ref': 'about'},
                    {'name': 'Resources', 'ref': 'entRes'},
                    {'name': 'Calendar', 'ref': 'calendar'},
                    {'name': 'Affiliates and Partners', 'ref': 'affil'},
                    {'name': 'Community', 'ref': 'commentary'}
                ];

    $scope.signinPages = [
        {'name': 'Home', 'ref': 'home'},
        {'name': 'About Us', 'ref': 'about'},
        {'name': 'Resources', 'ref': 'entRes'},
        {'name': 'Calendar', 'ref': 'calendar'},
        {'name': 'Affiliates and Partners', 'ref': 'affil'},
        {'name': 'Community', 'ref': 'commentary'}, 
        {'name': 'Account', 'ref': 'account'}
    ];

});
                
