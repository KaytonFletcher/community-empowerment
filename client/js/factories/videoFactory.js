angular.module('SpoderApp').factory('Video', function($http) {
    var video; 

    var methods = {
        getAll: function() {
            return $http.get('http://localhost:8080/api/videos/');
        },
        add: function(video) {
            return $http.post('http://localhost:8080/api/videos/', video);
        },
        delete: function(id) {
            //this is the post request for register, appending the user object to it (go to authRoutes.js)
            return $http.post('http://localhost:8080/api/videos/' + id);
        }
    }
    
    return methods;
});