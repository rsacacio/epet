(function () {
    'use strict';

    angular.module('reservapetApp').controller('PlansController', PlansController);

    PlansController.$inject = ['$location'];

    function PlansController($location) {
        var self = this;
        self.isActive = isActive;

        function isActive(path){
            var current = $location.path().split('/')[2];
            return path === current ? 'active' : '';
        }
    }

})();
