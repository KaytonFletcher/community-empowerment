angular.module('states', []);
angular.module('users', []);

// var underscore = angular.module('underscore', []);
// underscore.factory('_', ['$window', function($window) {
//   return $window._; // assumes underscore has already been loaded on the page
// }]);

var app = angular.module('SpoderApp', ['ui.router','states', 'users', 'ngTagsInput', 'ngclipboard']);

app.config(["$locationProvider" , function($locationProvider){
    $locationProvider.html5Mode(true);
}]);


app.filter('trusted', ['$sce', function ($sce) {
    return function(url) {
        return $sce.trustAsResourceUrl(url);
    };
}]);


function checkList(video, tagList){
    for(i in tagList){
        console.log(tagList[i]);
        console.log(video.tags);
        if(!video.tags.includes(tagList[i].text)){return false;}
    }
    return true;
}


app.filter('tag', function(){
    console.log("checking for match");
    return function(videoList, tagList){
        console.log(videoList);
        console.log(tagList);
      var filteredList = [];  
      //console.log("Video title: " + video.title);
      if(tagList === undefined || tagList.length == 0){return videoList;}
      videoList.forEach(video => {
        console.log(checkList(video,tagList));
        if(checkList(video, tagList)) {
            filteredList.push(video);
        } 
      });
      return filteredList;
    }
});

app.run( function($transitions, Authenticate, $rootScope) {
   
    if(!$rootScope.currentUser){
        Authenticate.getUser(localStorage.getItem('token')).then(function(res){
            $rootScope.currentUser = res.data.user;
            
        },function(error){
            console.log('No token in storage or token expired', error);
        });
    }

    $transitions.onStart({}, function(transition) {
        const st = transition.to();

      //if state to go to needs authentification
        if (st.data && st.data.authorization) {
   
            return Authenticate.getUser(localStorage.getItem('token')).then(function(res){
                if(!res) {
                    console.log("No response from server");
                } else if(!res.data.user){
                    if(st.data.redirectTo){
                        return transition.router.stateService.target(st.data.redirectTo);
                    }else {
                        return transition.router.stateService.target('home');
                    }
                } else {
                       if(st.data.admin && !res.data.user.admin){
                            return transition.router.stateService.target(st.data.redirectTo);
                       }else {
                           $rootScope.currentUser = res.data.user;
                       }
                }
            },function(error){
                console.log(error);
                return transition.router.stateService.target(st.data.redirectTo);
            })
        }
    });
  });

