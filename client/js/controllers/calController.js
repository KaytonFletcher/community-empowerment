angular.module('users').controller('calController', ['$scope', 'Cals', 'Authenticate',
    function($scope, Cals) {

        Cals.getAll().then(function(res) {
            $scope.eventReqs = res.data;
            console.log('Calendar data displayed');
          }, function(error) {
            console.log('Unable to retrieve requests: ', error);
          });

            $scope.submitRequest = function() {
                // requests event to be posted to database in factory
                var startTime = document.getElementById("startTime"); 
                var endTime = document.getElementById("endTime"); 
                $scope.event.startTime = startTime; 
                $scope.event.endTime = endTime; 
                Cals.reqEvent($scope.event).then(function(res){
                    if(!res){
                        console.log('sorry event no work');
                    } else {
                        console.log('YeEt'); 
                    }
                })
              };   
            
            $scope.deleteEvent = function(id) {
                Cals.delete(id).then(function(response){
                  for(var i = 0; i < $scope.eventReqs.length; i++){
                    if(response.data.title == $scope.eventReqs[i].title){
                      $scope.eventReqs.splice(i, 1);  
                    }}
                  }, function(error) {
                    console.log('Unable to delete user: ', error);
                  }
            )};
              
    }
]);