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
        getUser: function(token) {
            return $http.get('http://localhost:8080/api/auth/getUser', { headers: {'x-access-token': token} });  
        },
        updateUser: function(token, user) {
            return $http.post('http://localhost:8080/api/auth/updateUser/', user , { headers: {'x-access-token': token} });  
        },
        changePsw: function(token, user) {
            return $http.post('http://localhost:8080/api/auth/changePsw/', user , { headers: {'x-access-token': token} });
        }
    }
    
    return methods;
});