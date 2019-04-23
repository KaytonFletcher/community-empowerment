angular.module('SpoderApp').factory('Requests', function($http) {

    var methods = {
        getAll: function() {
          return $http.get('https://spoder1.herokuapp.com/api/req');
        },
        add: function(request, token) {
            return $http.post('https://spoder1.herokuapp.com/api/req/', request, { headers: {'x-access-token': token} });
        },
        delete: function(id) {
            return $http.delete('https://spoder1.herokuapp.com/api/req/' + id);
        },
        respond: function(id) {
            return $http.post('https://spoder1.herokuapp.com/req/respond', id, { headers: {'x-access-token': token} });
        }
    }
    
    return methods;
});