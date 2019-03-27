angular.module('states', []);
angular.module('users', []);
// var underscore = angular.module('underscore', []);
// underscore.factory('_', ['$window', function($window) {
//   return $window._; // assumes underscore has already been loaded on the page
// }]);

var app = angular.module('SpoderApp', ['ui.router', 'states', 'users']);

app.config(["$locationProvider" , function($locationProvider, $urlRouterProvider){
    $locationProvider.html5Mode(true);

}]);



app.run( function($transitions, Authenticate) {
   
    $transitions.onStart({}, function(transition) {
        const st = transition.to();
        console.log(st);
      //if state to go to needs authentification
        if (st.data && st.data.authorization) {
   
            return Authenticate.getUser(localStorage.getItem('token')).then(function(res){
                if(!res) {
                    console.log("No response from server");
                } else if(!res.data.user){
                    console.log("no authenticated, redirecting...");
                    if(st.data.redirectTo){
                        console.log("redirect to specified: " + st.data.redirectTo);
                        return transition.router.stateService.target(st.data.redirectTo);
                    }else {
                        console.log("redirect to home, no redirect specified");
                        return transition.router.stateService.target('home');
                    }
                } else {
                       if(st.data.admin && !res.data.user.admin){
                            console.log("redirect to home, not admin");
                            return transition.router.stateService.target('home');
                       }else {
                           console.log("success boys");
                       }

                }
            },function(error){
                console.log('User not authenticated ', error);
                
            })
        } else {
            console.log("no data or auth");
        }
    });
  });

