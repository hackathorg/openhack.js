(function() {
    'use strict';

    function OpenhackPackages($http, $q, $resource) {
        return {
            name: 'openhack-packages',
            packages: $resource('api/openhackSettings/:name', {
                name: '@name'
                }, {
                update: {
                    method: 'PUT'
                },
                show: {
                    method: 'GET'
                },
                all: {
                    method: 'GET',
                    isArray: true,
                    url: 'api/openhackSettings'
                }
            }),
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

    OpenhackPackages.$inject = ['$http', '$q', '$resource'];

})();
