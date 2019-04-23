angular.module('SpoderApp').factory('Video', function($http) {
    
    var methods = {
        getAll: function() {
            return $http.get('https://spoder.herokuapp.com/api/videos');
        },
        add: function(video, token) {
            return $http.post('https://spoder.herokuapp.com/api/videos/', video, { headers: {'x-access-token': token} });
        },
        delete: function(id, token) {
            //this is the post request for register, appending the user object to it (go to authRoutes.js)
            return $http.delete('https://spoder.herokuapp.com/api/videos/' + id, { headers: {'x-access-token': token} });
        }
    }
    
    return methods;
});