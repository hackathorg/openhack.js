'use strict';

angular.module('mean.system').controller('HeaderController', ['$scope', '$rootScope', 'Menus', 'MeanUser', '$state', '$mdSidenav', 'Header',
  function ($scope, $rootScope, Menus, MeanUser, $state, $mdSidenav, Header) {
    var vm = this;
    vm.menus = {};
    vm.hdrvars = {
      authenticated: MeanUser.loggedin,
      user: MeanUser.user,
      isAdmin: MeanUser.isAdmin
    };
    
    // Get global menu settings
    $scope.packageSettings = Header.packages.all();

    // Default hard coded menu items for main menu
    var defaultMainMenu = [];

    // Query menus added by modules. Only returns menus that user is allowed to see.
    function queryMenu (name, defaultMenu) {
      Menus.query({
        name: name,
        defaultMenu: defaultMenu
      }, function (menu) {
        var filteredMenu = []
        for (var i = 0; i < menu.length; i++) {
          // Its not a default menu, and settings must be checked
          if (menu[i].module !== "default"){

            var settings = [];
            var menu_settings = [];

            for (var j = 0; j < packageSettings.length; j++) {
              if(packageSettings[j].packageName.toLowerCase() === menu[i].module.toLowerCase()){
                settings = packageSettings[j].settings
                break;
              }
            }
            for (var j = 0; j < settings.length; j++) {
              if(settings[j] === "menu_settings"){
                menu_settings = settings[j]
                break;
              }
            }

            // There weren't any menu settings for this module
            if (!menu_settings) {
              filteredMenu.push(menu[i])
            } else {
              // This menuitem is a singleton
              if (!menu[i].submenus.length) {
                // return if it should be shown, based on current event status and ur circle info
                // like .. if (menu_settings[menu[i].name + event status] contains ur circle info)
              } else {
                var submenu = [];
                for (var j = 0; j < menu[i].submenus.length; j++) {
                  // return if it should be shown, based on current event status and ur circle info
                  // like .. if (menu_settings[menu[i].submenus[j].name + event status] contains ur circle info){ add to submenu }
                }
                // If the submenu is non zero, add it to the menu item and add this to the final menu, otherwise dont add it
                if (submenu.length) {
                  menu[i].submenus = submenu
                  filteredMenu.push(menu[i])
                }
              }
            }
          } else {
            // Its a default menu, and should be shown
            filteredMenu.push(menu[i])
          }
        }

      });
    }

    $scope.toggleMenu = function (){
      $mdSidenav('left').toggle();
    }

    // Query server for menus and check permissions
    queryMenu('main', defaultMainMenu);
    queryMenu('account', []);

    $scope.isCollapsed = false;

    $rootScope.$on('loggedin', function () {
      queryMenu('main', defaultMainMenu);

      vm.hdrvars = {
        authenticated: MeanUser.loggedin,
        user: MeanUser.user,
        isAdmin: MeanUser.isAdmin
      }
    });

    vm.logout = function () {
      MeanUser.logout()
    };

    $rootScope.$on('logout', function () {
      vm.hdrvars = {
        authenticated: false,
        user: {},
        isAdmin: false
      };
      queryMenu('main', defaultMainMenu);
      $state.go('home');
    });
  }
]);
