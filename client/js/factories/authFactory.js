angular.module('users').factory('Authenticate', function($http) {

    var methods = {
        
        login: function(user) {
            return $http.post('http://localhost:8080/api/auth/login/', user);
        },

        register: function(user) {
            return $http.post('http://localhost:8080/api/auth/register/', user);
        },

        getUser: function(token) {
            return $http.get('http://localhost:8080/api/auth/getUser', { headers: {'x-access-token': token} });
        }  
    }
    
    return methods;
});