angular.module('SpoderApp').controller('requestController', ['$scope', '$rootScope', 'Requests',
function($scope, $rootScope, Requests) {
    console.log(Requests); 

    Requests.getAll().then(function(res) {
        $scope.requests = res.data;
        console.log($scope.requests); 
        console.log($rootScope.currentUser);
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
            $scope.request.user = $rootScope.currentUser._id; 
            $scope.request.subject = document.getElementById("requestList").value; 
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
                //$scope.deleteRequest(id); 
                console.log('responded to request');
              } else {console.log("error responding to Requests");}
            }, function(err){
                console.log(err);
            });
          } 
}
]);