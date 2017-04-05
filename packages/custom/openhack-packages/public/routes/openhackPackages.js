(function() {
    'use strict';

    function OpenhackPackages($stateProvider) {
        $stateProvider.state('openhackPackages example page', {
            url: '/openhackPackages/example',
            templateUrl: 'openhack-packages/views/index.html'
        }).state('openhackPackages circles example', {
            url: '/openhackPackages/example/:circle',
            templateUrl: 'openhack-packages/views/example.html'
        });
    }

    angular
        .module('mean.openhack-packages')
        .config(OpenhackPackages);

    OpenhackPackages.$inject = ['$stateProvider'];

})();
