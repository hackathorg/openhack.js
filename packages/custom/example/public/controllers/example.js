(function() {
    'use strict';

    /* jshint -W098 */

    function ExampleController($scope, Global, Example, $stateParams) {
        $scope.global = Global;
        $scope.package = {
            name: 'example'
        };

    }

    angular
        .module('mean.example')
        .controller('ExampleController', ExampleController);

    ExampleController.$inject = ['$scope', 'Global', 'Example', '$stateParams'];

})();
