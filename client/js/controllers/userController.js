angular.module('users').controller('userController', ['$scope', 'Users', 
    function($scope, Users) {

        Users.getAll().then(function(res) {
            $scope.users = res.data;
            console.log('User data displayed');
          }, function(error) {
            console.log('Unable to retrieve users: ', error);
          });

          $scope.addUser = function() {
            console.log('hello');
            Users.create($scope.newUser).then(function(response){
              $scope.users.push($scope.newUser); 
              $scope.newUser = {}; 
              console.log('mans is hot');
            }, function(error) {
              console.log('Unable to create new user: ', error);
            })
          };
      
          $scope.deleteUser = function(id) {
            Users.delete(id).then(function(response){
              for(var i = 0; i < $scope.users.length; i++){
                if(response.data.email == $scope.users[i].email){
                  $scope.users.splice(i, 1);  
                  console.log('mans not hot');
                }}
              }, function(error) {
                console.log('Unable to delete user: ', error);
              }
            )};
    }
]);