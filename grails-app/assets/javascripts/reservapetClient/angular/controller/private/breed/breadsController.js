(function () {
    'use strict';

    angular.module('reservapetApp').controller('BreedsController',BreedsController);

    BreedsController.$inject = ['$location'];

    function BreedsController($location) {
        var self = this;
        self.isActive = isActive;

        function isActive(path){
            var current = $location.path().split('/')[2];
            return path === current ? 'active' : '';
        }
    }

})();
