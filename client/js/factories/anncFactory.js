angular.module('SpoderApp').factory('Announcements', function($http) {

    var methods = {
        getAll: function() {
          return $http.get('http://localhost:8080/api/annc');
        },
        add: function(annc, token) {
            return $http.post('http://localhost:8080/api/annc/', annc, { headers: {'x-access-token': token} });
        },
        delete: function(id) {
            return $http.delete('http://localhost:8080/api/annc/' + id);
        }
     
    }
    return methods;
});