(function() {
    'use strict';

    /* jshint -W098 */

    function ExampleController($scope, Global, Example, $stateParams, Menus) {
        $scope.global = Global;
        $scope.package = {
            name: 'example'
        };

        $scope.modulemenus = [];
        $scope.menu_settings = {}

        function queryMenu (name, defaultMenu, callback) {
          Menus.query({
            name: name,
            defaultMenu: defaultMenu
          }, function (menu) {
            for (var i = 0; i < menu.length; i++) {
                if (menu[i].module === "example"){
                    if (menu[i].submenus) {
                        $scope.modulemenus.push(menu[i].submenus)
                    } else {
                        $scope.modulemenus.push(menu[i])
                    }
                }
            }
            callback()
          });
        }

        function updateSettings() {
            for (var i = 0; i < $scope.modulemenus.length; i++) {
                console.error('pre_' + $scope.modulemenus[i].name)
                $scope.menu_settings['pre_' + $scope.modulemenus[i].name] = ['Organiser'];
                $scope.menu_settings['peri_' + $scope.modulemenus[i].name] = ['Organiser'];
                $scope.menu_settings['post_' + $scope.modulemenus[i].name] = ['Organiser'];
            }
        }

        queryMenu('main', [], updateSettings);

        console.error($scope.menu_settings)

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

        $scope.qrcode = "https://api.qrserver.com/v1/create-qr-code/?data=HelloWorld&amp;size=100x100"

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

    ExampleController.$inject = ['$scope', 'Global', 'Example', '$stateParams', 'Menus'];

})();