angular.module('users').factory('Cals', function($http) {

    var methods = {
        reqEvent: function(token) {
            return $http.post('http://localhost:8080/api/cal', { headers: {'x-access-token': token} });
        }, 

        getAll: function() {
            return $http.get('http://localhost:8080/api/cal');
        },
        delete: function(id) {
            return $http.delete('http://localhost:8080/api/cal/' + id);
        },
    }
    
    return methods;
});