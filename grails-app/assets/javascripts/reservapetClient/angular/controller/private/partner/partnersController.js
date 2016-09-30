(function () {
    'use strict';

    angular.module('reservapetApp').controller('PartnersController',PartnersController);

    PartnersController.$inject = ['$location'];

    function PartnersController($location) {
        var self = this;
        self.isActive = isActive;

        function isActive(path){
            var current = $location.path().split('/')[2];
            return path === current ? 'active' : '';
        }
    }

})();
