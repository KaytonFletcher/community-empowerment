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
    }
    
    return methods;
}); 