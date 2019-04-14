angular.module('SpoderApp').controller('videoController', ['$scope', 'Video',
    function($scope, Video) {
      $scope.videos = [];

      // $scope.event.userID = Authenticate.getUser(localStorage.getItem('token')); 

        Video.getAll().then(function(res) {
            console.log(res.data);
            $scope.videos = res.data;

            console.log("IS IT AN ARRAY " + Array.isArray($scope.videos));

        }, function(error) {
            console.log('Unable to retrieve requests: ', error);
          });

      //   {
      //     "url": "https://www.youtube.com/embed/gGruZGY4Gvk"

      // },
      // {
      //     "url": "https://www.youtube.com/embed/JGHWVAN_yQg"
      // }, 
      // {
      //   "url": "https://www.youtube.com/embed/CzwGcARRVok"
      // }, 
      // {
      //   "url": "https://www.youtube.com/embed/SYMi1QCzQEY"
      // }, 
      // {
      //   "url": "https://www.youtube.com/embed/3dW-6iJSqQI"
      // }, 
      // {
      //   "url": "https://www.youtube.com/embed/ZnWXtjQOxx0"
      // }
            
        $scope.deleteVideo = function(id) {
            Video.delete(id, localStorage.getItem('token')).then(function(response){
              for(var i = 0; i < $scope.videoReqs.length; i++){
                if(response.data.title == $scope.videoReqs[i].title){
                  $scope.videoReqs.splice(i, 1);  
                }
              }
              }, function(error) {
                console.log('Unable to delete user: ', error);
              }
        )
      };

        $scope.addVideo = function() {
          var url = $scope.newVideo.url.split('v=')[1];
          if(url){
            $scope.newVideo.url = 'https://www.youtube.com/embed/' + url.split('&')[0];
          }

          Video.add($scope.newVideo, localStorage.getItem('token')).then(function(res){  
            if(res.data){
              $scope.videos.push($scope.newVideo);
            }else {console.log("error recieving video");}
            $scope.newVideo = undefined;
          }, function(err){
              console.log(err);
          });
          
        }
    }]);