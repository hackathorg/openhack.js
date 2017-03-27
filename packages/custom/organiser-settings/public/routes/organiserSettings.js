(function() {
    'use strict';

    function OrganiserSettings($stateProvider) {
        $stateProvider.state('eventstatus', {
            url: '/admin/status',
            templateUrl: 'organiser-settings/views/eventstatus.html'
        }).state('eventstaging', {
            url: '/admin/staging',
            templateUrl: 'organiser-settings/views/eventstaging.html'
        });
    }

    angular
        .module('mean.organiser-settings')
        .config(OrganiserSettings);

    OrganiserSettings.$inject = ['$stateProvider'];

})();
