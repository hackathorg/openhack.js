(function() {
    'use strict';

    /* jshint -W098 */

    function BoilerPlateController($scope, Global, BoilerPlate, $stateParams, $rootScope) {
        $rootScope.navbar = true;
        $scope.global = Global;
        $scope.package = {
            name: 'boiler-plate'
        };

        $scope.site = {
            url: "",
            event: {
                name: "WarwickHACK",
                description: "Sample text",
                date: "5 & 6th Feb 2017",
                location: ""
            },
            about: {
                description: ""
            }, 
            info: {
                sections: [{
                    image: "images/image1.png",
                    title: "Make",
                    description: ""
                },{
                    image: "images/image2.png",
                    title: "Create",
                    description: ""
                },{
                    image: "images/image3.png",
                    title: "Innovate",
                    description: ""
                }]
            },
            faq: [{
                question: "Q1",
                answer: "A1"
            },{
                question: "Q2",
                answer: "A2"
            },{
                question: "Q3",
                answer: "A3"
            }],
            signup: {
                oauth: {
                    client_id: "ABC",
                    redirect_uri: "thissite/auth"
                },
                registermsg : "Congratulations, you are registered for this event"
            }
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

    BoilerPlateController.$inject = ['$scope', 'Global', 'BoilerPlate', '$stateParams','$rootScope'];

})();
