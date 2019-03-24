
//passed the ng scope objects, states to go to, and Authenticate factory to the controller function
angular.module('users').controller('authController', ['$scope', '$state','Authenticate', 
    function($scope, $state, Authenticate) {
        $scope.login = function() {
            console.log('logging in....');
            Authenticate.login($scope.login.user).then(function(res){

                if(res.data.auth){
                    localStorage.setItem('token', res.data.token);
                    $scope.getUser();

                    if(res.data.admin){
                        $state.go('adminAccount');
                    } else { $state.go('userAccount'); }
                
                } else {
                    console.log("Wrong email or password");
                }
            }, function(error) {
              console.log('Unable to login: ', error);
            })
          };

          //this function is binded to the form submission in createacct.html (don't forget to include the controller in the form)
        $scope.register = function() {

            //calls the factories register post request, passing the new user to the request
            Authenticate.register($scope.newUser).then(function(res){
                //this is the "callback" function
                //after the backend has finished handling the post request
                //whatever is sent back can be accessed through res.data.thingsentback
                console.log("registered!!!")
                localStorage.setItem('token', res.data.token);

                //no one is an admin when registered, go to user account
                $state.go('userAccount');
            }, function(error) {
              console.log('Unable to create new user: ', error);
            });
          };

        $scope.getUser = function() {
            Authenticate.getUser(localStorage.getItem('token')).then(function(res){
                
                console.log("got the user!! " + res.data.user);

            },function(error){
                console.log('User not authenticated ', error);
            });
        };
    }     
]);