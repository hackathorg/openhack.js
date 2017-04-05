(function() {
    'use strict';

    function BoilerPlate($stateProvider) {
        $stateProvider.state('boilerPlate', {
            url: '/landing',
            templateUrl: 'boiler-plate/views/index.html'
        });
    }

    angular
        .module('mean.boiler-plate')
        .config(BoilerPlate);

    BoilerPlate.$inject = ['$stateProvider'];

})();
