angular.module('users').factory('Cals', function($http) {

    var methods = {
        reqEvent: function(event) {
            return $http.post('https://spoder1.herokuapp.com/api/cal', event);
        }, 
        getAll: function() {
            return $http.get('https://spoder1.herokuapp.com/api/cal');
        },
        delete: function(id) {
            return $http.delete('https://spoder1.herokuapp.com/api/cal/' + id);
        },
        addEvent: function(eid) {
            return $http.post('https://spoder1.herokuapp.com/cal/admin/' + eid);
        }
    }
    
    return methods;
}); 