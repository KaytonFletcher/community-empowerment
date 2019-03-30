
//passed the ng scope objects, states to go to, and Authenticate factory to the controller function
angular.module('users').controller('authController', ['$scope', '$window', '$state','Authenticate', 
    function($scope, $window, $state, Authenticate) {
        $scope.user = false; 
        
        $scope.login = function() {
            console.log('logging in....');
            Authenticate.login($scope.login.user).then(function(res){
                console.log("after post");
                console.log(res.data);
                if(res.data.auth){
                    localStorage.setItem('token', res.data.token);
                
                    if(res.data.admin){
                        $state.go('adminAccount');
                        //$window.location.href = "http://" + $window.location.host + "/account/admin";
                        location.reload(); 
                    } else { 
                        $state.go('userAccount', {}, {reload: true});
                        //$window.location.href = "http://" + $window.location.host + "/account/user";
                     }
                
                } else {
                    console.log("Wrong email or password");
                }
            }, function(error) {

               /* DISPLAY ERROR MESSAGE TO USER IN HTML */
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
                $scope.user = true; 

                //no one is an admin when registered, go to user account
                $state.go('userAccount');
            }, function(error) {

                /* DISPLAY ERROR MESSAGE TO USER IN HTML */
              console.log('Unable to create new user: ', error);
            });
          };

        $scope.getUser = function() {
            Authenticate.getUser(localStorage.getItem('token')).then(function(res){
                $scope.user = true; 
                console.log("got the user!! " + res.data.user);

            },function(error){
                $scope.user = false; 
                console.log('User not authenticated ', error);
            });
        };
    }     
]);