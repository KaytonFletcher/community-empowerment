angular.module('users').controller('NavbarCtrl', function ($scope, Authenticate) {
    Authenticate.verify(localStorage.getItem('token')).then(function(res){
        if(!res || !res.data.auth){
            $scope.pages = [
                {'name': 'Home', 'ref': 'home'},
                {'name': 'About Us', 'ref': 'about'},
                {'name': 'Resources', 'ref': 'research'},
                {'name': 'Calendar', 'ref': 'calendar'},
                {'name': 'Affiliates and Partners', 'ref': 'affil'},
                {'name': 'Community', 'ref': 'commentary'}, 
                {'name': 'Sign-in', 'ref': 'signin'},
            ];
        } else {
            $scope.pages = [
                {'name': 'Home', 'ref': 'home'},
                {'name': 'About Us', 'ref': 'about'},
                {'name': 'Resources', 'ref': 'research'},
                {'name': 'Calendar', 'ref': 'calendar'},
                {'name': 'Affiliates and Partners', 'ref': 'affil'},
                {'name': 'Community', 'ref': 'commentary'}, 
                {'name': 'Account', 'ref': 'account'}, 
            ];
        }
    })
});
  