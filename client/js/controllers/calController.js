angular.module('users').controller('calController', ['$scope', '$rootScope', 'Cals',
    function($scope, $rootScope, Cals) {

      // $scope.event.userID = Authenticate.getUser(localStorage.getItem('token')); 

        Cals.getAll().then(function(res) {
            $scope.eventReqs = res.data;
            console.log('Calendar data displayed');
          }, function(error) {
            console.log('Unable to retrieve requests: ', error);
          });

            $scope.submitRequest = function() {
                $scope.event.startTime = new Date($scope.event.startTime).toISOString(); 
                $scope.event.endTime = new Date($scope.event.endTime).toISOString(); 
                $scope.event.user = $rootScope.currentUser._id;
                Cals.reqEvent($scope.event).then(function(res){
                    if(!res){
                        console.log('sorry event no work');
                    } else {
                        angular.element(document.querySelectorAll( '#requestEventModal' )).modal('hide');
                        alert("You have submitted an event!");
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
                    console.log('Unable to delete event: ', error);
                  }
            )};

            $scope.acceptEvent = function(eid) {
              Cals.addEvent(eid).then(function(res){
                if(!res){
                  console.log('event not added');
              } else {
                  console.log('YeEt');  
                  alert("You have added an event to the calendar!");
              }
            }
          )};
              
    }
]);