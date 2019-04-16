angular.module('users').factory('Announcements', function($http) {

    var methods = {
        
        getAll: function() {
          return $http.get('http://localhost:8080/api/annc');
        },
        
        delete: function(id) {
            return $http.delete('http://localhost:8080/api/annc/' + id);
        }
     
    }
    
    return methods;
});