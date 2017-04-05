(function() {
    'use strict';

    function OpenhackPackages($http, $q) {
        return {
            name: 'openhack-packages',
            checkCircle: function(circle) {
                var deferred = $q.defer();

                $http.get('/api/openhackPackages/example/' + circle).success(function(response) {
                    deferred.resolve(response);
                }).error(function(response) {
                    deferred.reject(response);
                });
                return deferred.promise;

            }
        };
    }

    angular
        .module('mean.openhack-packages')
        .factory('OpenhackPackages', OpenhackPackages);

    OpenhackPackages.$inject = ['$http', '$q'];

})();
