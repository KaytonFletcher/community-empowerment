
//passed the ng scope objects, states to go to, and Authenticate factory to the controller function
angular.module('users').controller('authController', ['$scope', '$rootScope', '$state','Authenticate', 
    function($scope, $rootScope, $state, Authenticate) {
        $scope.newUser = undefined;
        $scope.registerError = undefined;

        $scope.login = function() {
            Authenticate.login($scope.login.user).then(function(res){
                angular.element(document.querySelectorAll( '#signin-modal' )).modal('hide');
                $scope.login.user = undefined;
                if(res.data.auth){
                    localStorage.setItem('token', res.data.token);
                
                    //calls getUser in app.js
                    $state.go('account');
                }
            }, function(error) {
                $scope.login.user = undefined;
                $rootScope.currentUser = undefined;
                $scope.loginError = error.data;
               /* DISPLAY ERROR MESSAGE TO USER IN HTML */
              console.log('Unable to login: ', error);
            })
          };

          //this function is binded to the form submission in createacct.html (don't forget to include the controller in the form)
        $scope.register = function() {

            if($scope.newUser.password !== $scope.newUser.pswCheck)
            {
                $scope.registerError = "Passwords do not match";
                $scope.newUser = undefined;
                $rootScope.currentUser = undefined;
                return;
            }
            //calls the factories register post request, passing the new user to the request
            Authenticate.register($scope.newUser).then(function(res){
                //this is the "callback" function
                //after the backend has finished handling the post request
                //whatever is sent back can be accessed through res.data.thingsentback
                $scope.newUser = undefined;
                $scope.registerError = undefined;
                localStorage.setItem('token', res.data.token);

                //calls getUser in app.js
                $state.go('account');
            }, function(error) {
                $scope.newUser = undefined;
                $rootScope.currentUser = undefined;
                $scope.registerError = error.data;
                /* DISPLAY ERROR MESSAGE TO USER IN HTML */
              console.log('Unable to create new user: ', error);
            });
        };

        $scope.getUser = function() {
            Authenticate.getUser(localStorage.getItem('token')).then(function(res){
            },function(error){
                $scope.user = undefined;
                console.log('User not authenticated ', error);
            });
        };

        $scope.logout = function() {  
            console.log("logging out");     
            localStorage.removeItem('token');
            $rootScope.currentUser = undefined;
            $state.go('home');
            alert("You have logged out!");
        };

        $scope.update = function() {
            Authenticate.updateUser(localStorage.getItem('token'), $scope.updatedUser).then(function(res){
                $scope.updateUser = undefined;
                $state.reload();
            }, function(error){
                $scope.updateUser = undefined;
                /* DISPLAY ERROR MESSAGE TO USER IN HTML */
                console.log('Unable to update user: ', error);
            });

        }

        $scope.changePsw = function() {
            Authenticate.changePsw(localStorage.getItem('token'), $scope.updatedUser).then(function(res){
                $scope.updateUser = undefined;
                $state.reload();
            }, function(error){
                $scope.updateUser = undefined;
                console.log('Unable to update user: ', error);
            });

        }

        $scope.deleteAccount = function() {
            Authenticate.deleteAccount(localStorage.getItem('token')).then(function(res){
                angular.element(document.querySelectorAll( '#delete-modal' )).modal('hide');
                $scope.logout();
            }, function(error){
                console.log('Unable to delete user: ', error);
            });
        }
    }     
]);