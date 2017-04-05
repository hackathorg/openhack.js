(function() {
    'use strict';

    function Example($stateProvider) {
        $stateProvider.state('example functionality', {
            url: '/example/functionality',
            templateUrl: 'example/views/index.html'
        }).state('example settings', {
            url: '/example/settings',
            templateUrl: 'example/views/settings.html'
        });
    }

    angular
        .module('mean.example')
        .config(Example);

    Example.$inject = ['$stateProvider'];

})();
