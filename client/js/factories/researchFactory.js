angular.module('SpoderApp').factory('Research', function($http) {
    
    var methods = {
        getAll: function() {
            return $http.get('http://localhost:8080/api/researches');
        },
        add: function(research, token) {
            return $http.post('http://localhost:8080/api/researches/', research, { headers: {'x-access-token': token} });
        },
        delete: function(id, token) {
            //this is the post request for register, appending the user object to it (go to authRoutes.js)
            return $http.post('http://localhost:8080/api/researches/' + id, { headers: {'x-access-token': token} });
        }
    }
    
    return methods;
});