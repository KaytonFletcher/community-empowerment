angular.module('SpoderApp').controller('researchController', ['$scope', 'Research', '$filter',
    function($scope, Research, $filter) {
      $scope.tagList = [];
      $scope.researches = [];
      $scope.filteredResearch = [];

      // $scope.event.userID = Authenticate.getUser(localStorage.getItem('token')); 

        Research.getAll().then(function(res) {
            $scope.researches = res.data;
            $scope.filteredResearch = $scope.researches;
        }, function(error) {
            console.log('Unable to retrieve requests: ', error);
          });


          
        $scope.deleteResearch = function(id) {
            Research.delete(id, localStorage.getItem('token')).then(function(response){
              for(var i = 0; i < $scope.researchReqs.length; i++){
                if(response.data.title == $scope.researchReqs[i].title){
                  $scope.researchReqs.splice(i, 1);  
                }
              }
              }, function(error) {
                console.log('Unable to delete research: ', error);
              });
        };

        $scope.addResearch = function() {
			//$scope.newResearch.url

          Research.add($scope.newResearch, localStorage.getItem('token')).then(function(res){  
            if(res.data){
              $scope.researches.push($scope.newResearch);
            }else {console.log("error recieving research");}
            $scope.newResearch = undefined;
          }, function(err){
              console.log(err);
          });
          
        }
    }]);