angular.module('users').controller('NavbarCtrl', function ($scope, $state) {
    $scope.navMessage = undefined;


    $scope.signoutPages = [
        {'name': 'Home', 'ref': 'home'},
        {'name': 'Resources', 'ref': 'entRes'},
        {'name': 'Research', 'ref': 'research'},
        {'name': 'Calendar', 'ref': 'calendar'},
        {'name': 'Affiliates and Partners', 'ref': 'affil'},
    ];

    $scope.signinPages = [
        {'name': 'Home', 'ref': 'home'},
        {'name': 'Resources', 'ref': 'entRes'},
		{'name': 'Research', 'ref': 'research'},
        {'name': 'Calendar', 'ref': 'calendar'},
        {'name': 'Announcements', 'ref': 'announcements'},
        {'name': 'Affiliates and Partners', 'ref': 'affil'},
        {'name': 'Request Program', 'ref': 'requestprogram'},
        {'name': 'Account', 'ref': 'account'},
    ];

    $scope.checkState = function(stateRef) {
        if(stateRef === 'entRes' || stateRef === 'research') {
            angular.element(document.querySelectorAll( '#signin-modal' )).modal('show');
        } else { 
            $state.go(stateRef); }
    }
});
                
