angular.module('states', []);
angular.module('users', []);
// var underscore = angular.module('underscore', []);
// underscore.factory('_', ['$window', function($window) {
//   return $window._; // assumes underscore has already been loaded on the page
// }]);

var app = angular.module('SpoderApp', ['ui.router', 'states', 'users']);

app.config(["$locationProvider" , function($locationProvider){
    $locationProvider.html5Mode(true);
}]);

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

app.run( function($transitions, Authenticate) {
   

    $transitions.onStart({}, async function(transition) {
        const st = transition.to();
      //if state to go to needs authentification
        if (st.data && st.data.authorization) {
        
            return Authenticate.verify(localStorage.getItem('token')).then(function(res){
                if(!res || !res.data.auth){
                    return transition.router.stateService.target(transition.to().data.redirectTo);
                }
            })
        } 
    });
  });

