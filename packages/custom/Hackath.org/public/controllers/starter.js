(function () {
  'use strict';

  angular.module('mean.meanStarter')
    .controller('StarterController', StarterController);

  StarterController.$inject = ['$scope', 'Global','$rootScope'];

  function StarterController ($scope, Global, $rootScope) {
    // Original scaffolded code.
    $scope.global = Global;
    $rootScope.navbar = true;
    $scope.package = {
      name: 'meanStarter'
    };
  }
})();
