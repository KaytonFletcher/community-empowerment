
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


        $scope.register = function() {
            Authenticate.register($scope.newUser).then(function(res){
                console.log("registered!!!")
                localStorage.setItem('token', user.data.token);

                //no one is an admin when registered
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