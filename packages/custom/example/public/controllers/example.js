(function() {
    'use strict';

    /* jshint -W098 */

    function ExampleController($scope, Global, Example, $stateParams) {
        $scope.global = Global;
        $scope.package = {
            name: 'example'
        };

        // Default package settings 
        $scope.defaultSettings = { packageName : 'Example',
            settings : [{
                key:'menu_settings', 
                value:{
                    'settings' : ['Organiser'],
                    'pre_functionality' : ['Organiser', 'Mentor'],
                    'peri_functionality' : ['Organiser', 'Mentor', 'Attendee'],
                    'post_functionality' : ['Organiser']
                }
            }]
        };

        $scope.default = false
        // Get the package settings
        $scope.packagesettings = Example.packages.show({packageName : 'Example'});

        // If the package settings havent been created before, set to default settings
        if (!$scope.packagesettings.settings){
            Example.packages.update($scope.defaultSettings);
            $scope.default = true
        }

    }

    angular
        .module('mean.example')
        .controller('ExampleController', ExampleController);

    ExampleController.$inject = ['$scope', 'Global', 'Example', '$stateParams'];

})();