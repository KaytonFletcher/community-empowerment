angular.module('SpoderApp').controller('videoController', ['$scope', 'Video', '$filter',
    function($scope, Video, $filter) {
      $scope.tagList = [];
      $scope.videos = [];
      $scope.filteredVideos = [];
      $scope.allTags = ['Business Plans', 'Case Studies', 'Program Design',
      'Minority Entrepreneurship', 'Opportunity Horizon', 'Women and Entrepreneurship'
      ,'Study Abroad Program', 'Established Businesses', 'Community-based', 
      'Marketing', 'Financial Ventures', 'Avoiding Commodity Traps', 'Microcredit'];

        Video.getAll().then(function(res) {
            $scope.videos = res.data;
            $scope.filteredVideos = $scope.videos;
        }, function(error) {
            console.log('Unable to retrieve requests: ', error);
          });

        $scope.tagCheck = function(){
          $scope.filteredVideos = $filter('tag')($scope.videos, $scope.tagList);
        }
          
        $scope.deleteVideo = function(id) {
            Video.delete(id, localStorage.getItem('token')).then(function(response){
              for(var i = 0; i < $scope.filteredVideos.length; i++){
                if(response.data.title == $scope.filteredVideos[i].title){
                  $scope.filteredVideos.splice(i, 1);  
                }
              }
              }, function(error) {
                console.log('Unable to delete video: ', error);
              });
        };

        $scope.loadTags = function($query){
          return $scope.allTags.filter(function(tag) {
            return tag.toLowerCase().indexOf($query.toLowerCase()) != -1;
          });
        }
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