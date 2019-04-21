angular.module('SpoderApp').controller('adminController', ['$scope', '$state', '$transitions', 'Users', 
    function($scope, $state, $transitions ,Users) {
      $scope.users = [];
      $scope.previousState = undefined;
      $scope.focusUser = undefined;

      $transitions.onSuccess({}, function(transition) {
        console.log("Transitions from " + transition.from().name + "to" + transition.to().name);

        $scope.previousState = transition.from().name;
      });

      
      $scope.loadUsers = function(){
        Users.getAll().then(function(res) {
          $scope.users = res.data;
          console.log('User data displayed');
        }, function(error) {
          console.log('Unable to retrieve users: ', error);
        });
      }

      if($scope.users === undefined || $scope.users.length == 0){
        $scope.loadUsers();
      }

      $scope.goBack = function(){
        $state.go($scope.previousState);
      }

      $scope.focusOnUser = function(index){
        console.log('focusing on user');
        $scope.focusUser = $scope.users[index];
        $state.go('userDetails');
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