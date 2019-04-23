angular.module('users').factory('Users', function($http) {

    var methods = {  
        getAll: function() {
          return $http.get('https://spoder1.herokuapp.com/api/users');
        },
        
        delete: function(id) {
            return $http.delete('https://spoder1.herokuapp.com/api/users/' + id);
        }
        
    }
    
    return methods;
});