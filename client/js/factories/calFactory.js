angular.module('users').factory('Cals', function($http) {

    var methods = {
        reqEvent: function(event) {
            return $http.post('http://localhost:8080/api/cal', event);
        }, 
        getAll: function() {
            return $http.get('http://localhost:8080/api/cal');
        },
        delete: function(id) {
            return $http.delete('http://localhost:8080/api/cal/' + id);
        },
        addEvent: function(eid) {
            return $http.post('http://localhost:8080/api/cal/admin/' + eid);
        }
    }
    
    return methods;
});