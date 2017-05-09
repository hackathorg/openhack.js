(function() {
    'use strict';

    function OpenhackCoder($http, $q) {
        return {
            name: 'openhack-coder',
            checkCircle: function(circle) {
                var deferred = $q.defer();

                $http.get('/api/openhackCoder/example/' + circle).success(function(response) {
                    deferred.resolve(response);
                }).error(function(response) {
                    deferred.reject(response);
                });
                return deferred.promise;

            }
        };
    }

    angular
        .module('mean.openhack-coder')
        .factory('OpenhackCoder', OpenhackCoder);

    OpenhackCoder.$inject = ['$http', '$q'];

})();
