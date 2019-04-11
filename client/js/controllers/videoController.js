angular.module('SpoderApp').controller('videoController', ['$scope', 'Video',
    function($scope, Video) {

      // $scope.event.userID = Authenticate.getUser(localStorage.getItem('token')); 

        // Vids.getAll().then(function(res) {
        //     $scope.videoReqs = res.data;
        //     console.log('Video data displayed');
        //   }, function(error) {
        //     console.log('Unable to retrieve requests: ', error);
        $scope.videos = [
          {
              "url": "https://www.youtube.com/embed/gGruZGY4Gvk"

          },
          {
              "url": "https://www.youtube.com/embed/JGHWVAN_yQg"
          }, 
          {
            "url": "https://www.youtube.com/embed/CzwGcARRVok"
          }, 
          {
            "url": "https://www.youtube.com/embed/SYMi1QCzQEY"
          }, 
          {
            "url": "https://www.youtube.com/embed/3dW-6iJSqQI"
          }, 
          {
            "url": "https://www.youtube.com/embed/ZnWXtjQOxx0"
          }
        ];
            
        $scope.deleteVideo = function(id) {
            Video.delete(id).then(function(response){
              for(var i = 0; i < $scope.videoReqs.length; i++){
                if(response.data.title == $scope.videoReqs[i].title){
                  $scope.videoReqs.splice(i, 1);  
                }}
              }, function(error) {
                console.log('Unable to delete user: ', error);
              }
        )
      };

        $scope.addVideo = function(id) {
          
        }
    }]);