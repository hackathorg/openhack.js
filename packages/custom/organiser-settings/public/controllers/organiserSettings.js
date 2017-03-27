(function() {
    'use strict';

    /* jshint -W098 */

    function OrganiserSettingsController($scope, Global, OrganiserSettings, $stateParams, Menus) {
        $scope.global = Global;
        $scope.package = {
            name: 'organiser-settings'
        };

        $scope.menus = {};
        var defaultMainMenu = [];

        function queryMenu (name, defaultMenu) {
          Menus.query({
            name: name,
            defaultMenu: defaultMenu
          }, function (menu) {
            $scope.menus[name] = menu
          });
        }
        
        queryMenu('main', defaultMainMenu);

        // Information about this event pulled from Hackath.org
        // This is a static example, to be replace by the event of this Openhack.js instance
        $scope.event = { 
            _id : "58b9cc9b72d6f51eacc9dd06",
            attendees : [],
            comments : [],
            date : "2017-03-03T20:05:47.718Z",
            description : "LOL",
            hosts : ["582d1554c666f4117cb01887"],
            maxAttendees:10,
            maxMentors:10,
            mentors:[],
            organisation:"LOL",
            ownerid:"582d1554c666f4117cb01887",
            skillLevel:"Intermediate & above",
            sponsors:true,
            tags:["asd"],
            title:"LOL",
            hidden:true,
            //Additional event information stored by Openhack.js
            status:"Prior",
            signups:true

        };

        // This will be populated from the attendees array using populate from Hackath.org 
        $scope.attendees = [
            {

            },
            {

            },
        ];

        $scope.eventstatus = [
            {'type': 'Prior'},
            {'type': 'Active'},
            {'type': 'Post'}
        ];

        $scope.checkCircle = function() {
            OrganiserSettings.checkCircle($stateParams.circle).then(function(response) {
                $scope.res = response;
                $scope.resStatus = 'info';
            }, function(error) {
                $scope.res = error;
                $scope.resStatus = 'danger';
            });
        };
    }

    angular
        .module('mean.organiser-settings')
        .controller('OrganiserSettingsController', OrganiserSettingsController);

    OrganiserSettingsController.$inject = ['$scope', 'Global', 'OrganiserSettings', '$stateParams', 'Menus'];

})();
