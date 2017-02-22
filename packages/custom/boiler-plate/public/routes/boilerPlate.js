(function() {
    'use strict';

    function BoilerPlate($stateProvider) {
        $stateProvider.state('boilerPlate example page', {
            url: '/boilerPlate/example',
            templateUrl: 'boiler-plate/views/index.html'
        }).state('boilerPlate circles example', {
            url: '/boilerPlate/example/:circle',
            templateUrl: 'boiler-plate/views/example.html'
        });
    }

    angular
        .module('mean.boiler-plate')
        .config(BoilerPlate);

    BoilerPlate.$inject = ['$stateProvider'];

})();
