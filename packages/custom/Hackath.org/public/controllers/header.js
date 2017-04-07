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
    var packageSettings = Header.packages.all();

    // Get global event state
    var eventSettings = Header.packages.get({packageName:"Event"});
    $scope.eventState = "pre"

    // for (var j = 0; j < eventSettings.settings.length; j++) {
    //   if(eventSettings.settings[j].key === "EventState"){
    //     $scope.eventState = eventSettings.settings[j].value
    //     break;
    //   }
    // }

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
              if(settings[j].key === "menu_settings"){
                menu_settings = settings[j].value
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
                //console.error($scope.eventState + "_" + menu[i].name)
                if (menu_settings[$scope.eventState + "_" + menu[i].name]){
                  filteredMenu.push(menu[i])
                } else {
                  filteredMenu.push(menu[i])
                }
              } else {
                var submenu = [];
                for (var j = 0; j < menu[i].submenus.length; j++) {
                  // return if it should be shown, based on current event status and ur circle info
                  if (menu_settings[$scope.eventState + "_" + menu[i].submenus[j].name]){
                    submenu.push(menu[i].submenus[j]);
                  } else {
                    submenu.push(menu[i].submenus[j]);
                  }
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
            //console.error(menu[i].name)
            filteredMenu.push(menu[i])
          }
        }
        vm.menus[name] = filteredMenu
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
