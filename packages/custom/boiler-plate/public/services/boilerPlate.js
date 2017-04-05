(function() {
    'use strict';

    function BoilerPlate($http, $q) {
        return {
            name: 'boiler-plate',
            checkCircle: function(circle) {
                var deferred = $q.defer();

                $http.get('/api/boilerPlate/example/' + circle).success(function(response) {
                    deferred.resolve(response);
                }).error(function(response) {
                    deferred.reject(response);
                });
                return deferred.promise;

            }
        };
    }

    angular
        .module('mean.boiler-plate')
        .factory('BoilerPlate', BoilerPlate);

    BoilerPlate.$inject = ['$http', '$q'];

})();
