angular.module('SpoderApp').controller('anncsController', ['$scope', 'Announcements', 'Authenticate',
function($scope, Announcements) {

    Announcements.getAll().then(function(res) {
        $scope.announcements = res.data;
        console.log('announcement data displayed');
      }, function(error) {
        console.log('Unable to retrieve announcements: ', error);
      });
      
      
      $scope.deleteAnnouncement = function(id) {
        Announcements.delete(id).then(function(response){
          for(var i = 0; i < $scope.announcements.length; i++){
            if(response.data._id == $scope.announcements[i]._id){
              $scope.announcements.splice(i, 1);  
            }}
          }, function(error) {
            console.log('Unable to delete announcement: ', error);
          }
        )};
      
        $scope.addAnnc = function() {
            console.log('we made it');
            Announcements.add($scope.annc, localStorage.getItem('token')).then(function(res){  
              if(res.data){
                $scope.announcements.unshift($scope.annc);
              } else {console.log("error recieving announcement");}
              $scope.annc = undefined;
            }, function(err){
                console.log(err);
            });
          } 
}
]);