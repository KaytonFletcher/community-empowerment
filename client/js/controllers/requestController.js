angular.module('SpoderApp').controller('requestController', ['$scope', 'Authenticate', 'Requests', 'Authenticate',
function($scope, Requests) {

    $scope.user = Authenticate.getUser(localStorage.getItem('token')).then(function(res){
      console.log("got the user!! " + res.data.user);
  },function(error){
      $scope.user = undefined;
      console.log('User not authenticated ', error);
  });

    Requests.getAll().then(function(res) {
        $scope.requests = res.data;
        console.log('request data displayed');
      }, function(error) {
        console.log('Unable to retrieve requests: ', error);
      });
      
      $scope.deleteRequest = function(id) {
        Requests.delete(id).then(function(response){
          for(var i = 0; i < $scope.requests.length; i++){
            if(response.data._id == $scope.requests[i]._id){
              $scope.requests.splice(i, 1);  
            }}
          }, function(error) {
            console.log('Unable to delete requests: ', error);
          }
        )};
      
        $scope.addRequest = function() {
            console.log('we made it');
            $scope.request.userID = $scope.user._id; 
            $scope.request.userName = $scope.user.name; 
            Requests.add($scope.request, localStorage.getItem('token')).then(function(res){  
              if(res.data){
                $scope.requests.unshift($scope.request);
              } else {console.log("error recieving request");}
              $scope.request = undefined;
            }, function(err){
                console.log(err);
            });
          } 

        $scope.respondToRequest = function(id) {
            Requests.respond(id, localStorage.getItem('token')).then(function(res){  
              if(res.data){
                $scope.deleteRequest(id); 
              } else {console.log("error responding to Requests");}
            }, function(err){
                console.log(err);
            });
          } 
}
]);