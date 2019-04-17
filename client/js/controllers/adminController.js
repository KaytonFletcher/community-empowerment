angular.module('users').controller('adminController', ['$scope', '$state', 'Users', 'Authenticate',
    function($scope, $state, Users) {
              
      $scope.loadUsers = function(){
        Users.getAll().then(function(res) {
          $scope.users = res.data;
          $state.go('allUsers');
          console.log('User data displayed');
        }, function(error) {
          console.log('Unable to retrieve users: ', error);
        });

      }

      $scope.loadUsers();

      $scope.goToUser() = function(id) {




        
      }
       
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