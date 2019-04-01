
//passed the ng scope objects, states to go to, and Authenticate factory to the controller function
angular.module('users').controller('authController', ['$scope', '$rootScope', '$state','Authenticate', 
    function($scope, $rootScope, $state, Authenticate) {
        $scope.canEdit = false;
        $scope.login = function() {
            console.log('logging in....');
            Authenticate.login($scope.login.user).then(function(res){
                console.log("We logged in!");
                $scope.login.user = undefined;
                if(res.data.auth){
                    
                    localStorage.setItem('token', res.data.token);
                
                    //calls getUser in app.js
                    $state.go('account');
                } else {
                    console.log("Wrong email or password");
                }
            }, function(error) {
                $scope.login.user = undefined;
                $rootScope.currentUser = undefined;
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
                $scope.newUser = undefined;

                localStorage.setItem('token', res.data.token);

                //calls getUser in app.js
                $state.go('account');
            }, function(error) {
                $scope.newUser = undefined;
                $scope.currentUser = undefined;
                /* DISPLAY ERROR MESSAGE TO USER IN HTML */
              console.log('Unable to create new user: ', error);
            });
        };

        $scope.getUser = function() {
            Authenticate.getUser(localStorage.getItem('token')).then(function(res){
                console.log("got the user!! " + res.data.user);

            },function(error){
                $scope.user = undefined;
                console.log('User not authenticated ', error);
            });
        };

        $scope.logout = function() {       
            localStorage.removeItem('token');
            $rootScope.currentUser = undefined;
            $state.go('home');
        };

        $scope.update = function() {
            console.log("UPDATING!");
            console.log($scope.updatedUser);
            Authenticate.updateUser(localStorage.getItem('token'), $scope.updatedUser).then(function(res){
            console.log("updated");
                
            }, function(error){
                /* DISPLAY ERROR MESSAGE TO USER IN HTML */
              console.log('Unable to update user: ', error);
            });

        }
    }     
]);