angular.module('users').controller('userController', ['$scope', 'Users', 
    function($scope, Users) {
        Users.getAll().then(function(res) {
            $scope.users = res.data;
          }, function(error) {
            console.log('Unable to retrieve listings:', error);
          });
    }
]);