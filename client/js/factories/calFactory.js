angular.module('users').factory('Cals', function($http) {

    var methods = {
        reqEvent: function(event) {
            return $http.post('https://efempowerment.herokuapp.com/api/cal', event);
        }, 
        getAll: function() {
            return $http.get('https://efempowerment.herokuapp.com/api/cal');
        },
        delete: function(id) {
            return $http.delete('https://efempowerment.herokuapp.com/api/cal/' + id);
        },
        addEvent: function(eid) {
            return $http.post('http://localhost:8080/api/cal/admin/' + eid);
        }
    }
    
    return methods;
}); 