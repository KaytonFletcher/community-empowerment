angular.module('users').factory('Authenticate', function($http) {
    var user; 

    var methods = {
        login: function(user) {
            return $http.post('https://efempowerment.herokuapp.com/api/auth/login/', user);
        },

        register: function(user) {
            //this is the post request for register, appending the user object to it (go to authRoutes.js)
            return $http.post('https://efempowerment.herokuapp.com/api/auth/register/', user);
        },
        getUser: function(token) {
            return $http.get('https://efempowerment.herokuapp.com/api/auth/getUser', { headers: {'x-access-token': token} });  
        },
        updateUser: function(token, user) {
            return $http.post('https://efempowerment.herokuapp.com/api/auth/updateUser/', user , { headers: {'x-access-token': token} });  
        },
        changePsw: function(token, user) {
            return $http.post('https://efempowerment.herokuapp.com/api/auth/changePsw/', user , { headers: {'x-access-token': token} });
        },
        deleteAccount: function(token) {
            return $http.delete('https://efempowerment.herokuapp.com/api/auth/deleteAccount' , { headers: {'x-access-token': token} });
        }
    }
    
    return methods;
});