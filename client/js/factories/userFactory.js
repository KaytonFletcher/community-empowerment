angular.module('users').factory('Users', function($http) {

    var methods = {  
        getAll: function() {
          return $http.get('https://spoder.herokuapp.com/api/users');
        },
        
        delete: function(id) {
            return $http.delete('https://spoder.herokuapp.com/api/users/' + id);
        }
        
    }
    
    return methods;
});