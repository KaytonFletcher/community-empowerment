angular.module('SpoderApp').factory('Requests', function($http) {

    var methods = {
        getAll: function() {
          return $http.get('http://localhost:8080/api/req');
        },
        add: function(request, token) {
            return $http.post('http://localhost:8080/api/req/', request, { headers: {'x-access-token': token} });
        },
        delete: function(id) {
            return $http.delete('http://localhost:8080/api/req/' + id);
        },
        respond: function(id) {
            return $http.post('http://localhost:8080/api/req/respond', id, { headers: {'x-access-token': token} });
        }
    }
    
    return methods;
});