angular.module('users').factory('Users', function($http) {

    var methods = {
        
        getAll: function() {
          return $http.get('http://localhost:8080/api/user');
        }
        

    }
    
    return methods;
});