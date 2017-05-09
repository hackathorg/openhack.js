(function() {
    'use strict';

    /* jshint -W098 */

    function OpenhackCoderController($scope, Global, OpenhackCoder, $stateParams, uiCodemirror) {
        $scope.global = Global;
        $scope.package = {
            name: 'openhack-coder'
        };

        $scope.checkCircle = function() {
            OpenhackCoder.checkCircle($stateParams.circle).then(function(response) {
                $scope.res = response;
                $scope.resStatus = 'info';
            }, function(error) {
                $scope.res = error;
                $scope.resStatus = 'danger';
            });
        };
    }

    angular
        .module('mean.openhack-coder')
        .controller('OpenhackCoderController', OpenhackCoderController);

    OpenhackCoderController.$inject = ['$scope', 'Global', 'OpenhackCoder', '$stateParams'];

})();
