(function() {
    'use strict';

    function OpenhackCoder($stateProvider) {
        $stateProvider.state('openhackCoder example page', {
            url: '/openhackCoder/example',
            templateUrl: 'openhack-coder/views/index.html'
        }).state('openhackCoder circles example', {
            url: '/openhackCoder/example/:circle',
            templateUrl: 'openhack-coder/views/example.html'
        });
    }

    angular
        .module('mean.openhack-coder')
        .config(OpenhackCoder);

    OpenhackCoder.$inject = ['$stateProvider'];

})();
