angular.module('users').factory('Authenticate', function($http) {
    var user; 

    var methods = {
        login: function(user) {
            return $http.post('http://localhost:8080/api/auth/login/', user);
        },

        register: function(user) {
            //this is the post request for register, appending the user object to it (go to authRoutes.js)
            return $http.post('http://localhost:8080/api/auth/register/', user);
        },
        verify: function(token) {
            return $http.get('http://localhost:8080/api/auth/verify', { headers: {'x-access-token': token} });
        } 
        ,
        getUser: function(token) {
            return $http.get('http://localhost:8080/api/auth/getUser', { headers: {'x-access-token': token} });
            
        },
    }
    
    return methods;
});