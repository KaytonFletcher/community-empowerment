angular.module('SpoderApp').factory('Video', function($http) {
    
    var methods = {
        getAll: function() {
            return $http.get('http://localhost:8080/api/videos');
        },
        add: function(video, token) {
            return $http.post('http://localhost:8080/api/videos/', video, { headers: {'x-access-token': token} });
        },
        delete: function(id, token) {
            //this is the post request for register, appending the user object to it (go to authRoutes.js)
            return $http.post('http://localhost:8080/api/videos/' + id, { headers: {'x-access-token': token} });
        }
    }
    
    return methods;
});