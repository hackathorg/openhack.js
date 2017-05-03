(function() {
    'use strict';

    function Header($http, $q, $resource) {
        return {
            name: 'header',
            packages: $resource('api/openhackSettings/:packageName', {
                packageName: '@packageName'
                }, {
                update: {
                    method: 'PUT'
                },
                show: {
                    method: 'GET'
                },
                names: {
                    method: 'GET',
                    isArray: true,
                    url: 'api/openhackPackagenames'
                },
                all: {
                    method: 'GET',
                    isArray: true,
                    url: 'api/openhackSettings'
                }
            }),
        };
    }

    angular
        .module('mean.system')
        .factory('Header', Header);

    Header.$inject = ['$http', '$q', '$resource'];

})();
