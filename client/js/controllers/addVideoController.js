angular.module('users').controller('addVideoController', ['$scope', 'Authenticate',
    function($scope) {

      // $scope.event.userID = Authenticate.getUser(localStorage.getItem('token')); 

        // Vids.getAll().then(function(res) {
        //     $scope.videoReqs = res.data;
        //     console.log('Video data displayed');
        //   }, function(error) {
        //     console.log('Unable to retrieve requests: ', error);
        // });

        $scope.submitRequest = function() {
          // requests event to be posted to database in factory
          // var startTime = document.getElementById("startTime"); 
          // var endTime = document.getElementById("endTime"); 
          // $scope.event.startTime = startTime; 
          // $scope.event.endTime = endTime; 
                
        };   
            
        $scope.deleteVideo = function(id) {
        //     Vids.delete(id).then(function(response){
        //       for(var i = 0; i < $scope.videoReqs.length; i++){
        //         if(response.data.title == $scope.videoReqs[i].title){
        //           $scope.videoReqs.splice(i, 1);  
        //         }}
        //       }, function(error) {
        //         console.log('Unable to delete user: ', error);
        //       }
        // )
      };

        $scope.addVideo = function(id) {
          var video = {
            'description': $scope.video.description,
            'summary': $scope.video.title,
          };
              
			  /*
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
			*/
              
    }
    }]);