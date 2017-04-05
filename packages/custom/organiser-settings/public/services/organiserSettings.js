(function() {
    'use strict';

    function OrganiserSettings($http, $q) {
        return {
            name: 'organiser-settings',
            checkCircle: function(circle) {
                var deferred = $q.defer();

                $http.get('/api/organiserSettings/example/' + circle).success(function(response) {
                    deferred.resolve(response);
                }).error(function(response) {
                    deferred.reject(response);
                });
                return deferred.promise;

            }
        };
    }

    angular
        .module('mean.organiser-settings')
        .factory('OrganiserSettings', OrganiserSettings);

    OrganiserSettings.$inject = ['$http', '$q'];

})();
