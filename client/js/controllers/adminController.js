angular.module('users').controller('adminController', ['$scope', 'Users', 'Authenticate',
    function($scope, Users) {
        
        Users.getAll().then(function(res) {
            $scope.users = res.data;
            console.log('User data displayed');
          }, function(error) {
            console.log('Unable to retrieve users: ', error);
          });

      
          $scope.deleteUser = function(id) {
            Users.delete(id).then(function(response){
              for(var i = 0; i < $scope.users.length; i++){
                if(response.data.email == $scope.users[i].email){
                  $scope.users.splice(i, 1);  
                }}
              }, function(error) {
                console.log('Unable to delete user: ', error);
              }
            )};
    }
]);