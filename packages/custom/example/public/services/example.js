(function() {
    'use strict';

    function Example($http, $q, $resource) {
        return {
            name: 'example',
            packages: $resource('api/openhackSettings/:packageName', {
                packageName: '@packageName'
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
                $http.get('/api/example/example/' + circle).success(function(response) {
                    deferred.resolve(response);
                }).error(function(response) {
                    deferred.reject(response);
                });
                return deferred.promise;

            }
        };
    }

    angular
        .module('mean.example')
        .factory('Example', Example);

    Example.$inject = ['$http', '$q', '$resource'];

})();
