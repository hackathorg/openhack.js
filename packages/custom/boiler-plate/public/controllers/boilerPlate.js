(function() {
    'use strict';

    /* jshint -W098 */

    function BoilerPlateController($scope, Global, BoilerPlate, $stateParams) {
        $scope.global = Global;
        $scope.package = {
            name: 'boiler-plate'
        };

        $scope.checkCircle = function() {
            BoilerPlate.checkCircle($stateParams.circle).then(function(response) {
                $scope.res = response;
                $scope.resStatus = 'info';
            }, function(error) {
                $scope.res = error;
                $scope.resStatus = 'danger';
            });
        };
    }

    angular
        .module('mean.boiler-plate')
        .controller('BoilerPlateController', BoilerPlateController);

    BoilerPlateController.$inject = ['$scope', 'Global', 'BoilerPlate', '$stateParams'];

})();
