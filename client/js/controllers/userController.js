angular.module('users').controller('userController', ['$scope', 'Users', 
    function($scope, Users) {

        Users.getAll().then(function(res) {
            $scope.users = res.data;
            console.log('User data displayed');
          }, function(error) {
            console.log('Unable to retrieve users: ', error);
          });
          
    }
]);