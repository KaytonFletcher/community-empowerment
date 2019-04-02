angular.module('users').controller('calController', ['$scope', 'Cals', 'Authenticate',
    function($scope, Cals) {

      $scope.event.userID = Authenticate.getUser(localStorage.getItem('token')); 

        Cals.getAll().then(function(res) {
            $scope.eventReqs = res.data;
            console.log('Calendar data displayed');
          }, function(error) {
            console.log('Unable to retrieve requests: ', error);
          });

            $scope.submitRequest = function() {
                // requests event to be posted to database in factory
                // var startTime = document.getElementById("startTime"); 
                // var endTime = document.getElementById("endTime"); 
                // $scope.event.startTime = startTime; 
                // $scope.event.endTime = endTime; 
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

            $scope.acceptEvent = function(id) {
              var event = {
                'description': $scope.event.description,
                'location': $scope.event.location,
                'summary': $scope.event.title,
                'start': {
                  'dateTime': $scope.event.startTime,
                  'timeZone': 'America/New_York',
                },
                'end': {
                  'dateTime': $scope.event.endTime,
                  'timeZone': 'America/New_York',
                },
                
              };
              
              calendar.events.insert({
                auth: auth,
                calendarId: 'primary',
                resource: event,
              }, function(err, event) {
                if (err) {
                  console.log('There was an error contacting the Calendar service: ' + err);
                  return;
                }
                console.log('Event created: %s', event.htmlLink);
              });
            }
              
    }
]);