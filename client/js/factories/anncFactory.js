angular.module('SpoderApp').factory('Announcements', function($http) {

    var methods = {
        getAll: function() {
          return $http.get('https://spoder.herokuapp.com/api/annc');
        },
        add: function(annc, token) {
            return $http.post('https://spoder.herokuapp.com/api/annc/', annc, { headers: {'x-access-token': token} });
        },
        delete: function(id) {
            return $http.delete('https://spoder.herokuapp.com/api/annc/' + id);
        }
     
    }
    return methods;
});