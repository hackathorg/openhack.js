(function() {
    'use strict';

    /* jshint -W098 */

    function OpenhackPackagesController($scope, Global, OpenhackPackages, $stateParams) {
        $scope.global = Global;
        $scope.package = {
            name: 'openhack-packages'
        };

        $scope.checkCircle = function() {
            OpenhackPackages.checkCircle($stateParams.circle).then(function(response) {
                $scope.res = response;
                $scope.resStatus = 'info';
            }, function(error) {
                $scope.res = error;
                $scope.resStatus = 'danger';
            });
        };
    }

    angular
        .module('mean.openhack-packages')
        .controller('OpenhackPackagesController', OpenhackPackagesController);

    OpenhackPackagesController.$inject = ['$scope', 'Global', 'OpenhackPackages', '$stateParams'];

})();
