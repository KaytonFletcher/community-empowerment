angular.module('SpoderApp').factory('Research', function($http) {
    
    var methods = {
        getAll: function() {
            return $http.get('https://spoder.herokuapp.com/api/research');
        },
        add: function(research, token) {
            return $http.post('https://spoder.herokuapp.com/research/', research, { headers: {'x-access-token': token} });
        },
        delete: function(id, token) {
            //this is the post request for register, appending the user object to it (go to authRoutes.js)
            return $http.delete('https://spoder.herokuapp.com/research/' + id, { headers: {'x-access-token': token} });
        }
    }
    
    return methods;
});