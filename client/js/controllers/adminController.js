angular.module('users').controller('adminController', ['$scope', '$state', 'Users', 'Authenticate',
    function($scope, $state, Users) {
      $scope.users = [];
      $scope.focusUser = undefined;
      
      $scope.loadUsers = function(){
        Users.getAll().then(function(res) {
          $scope.users = res.data;
          $state.go('allUsers');
          console.log('User data displayed');
        }, function(error) {
          console.log('Unable to retrieve users: ', error);
        });
      }

      $scope.focusOnUser = function(index){
        console.log('focusing on user');
        $scope.focusUser = $scope.users[index];
      }


      if($state.current.name == "allUsers" && ($scope.users === undefined || $scope.users.length == 0)){
        $scope.loadUsers();
      }

      $scope.focusAllUsers = function(){
        $scope.focusUser = undefined;
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