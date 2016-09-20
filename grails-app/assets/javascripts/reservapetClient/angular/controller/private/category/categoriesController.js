(function () {
    'use strict';

    angular.module('reservapetApp').controller('CategoriesController', CategoriesController);

    CategoriesController.$inject = ['$location'];

    function CategoriesController($location) {
        var self = this;
        self.isActive = isActive;

        function isActive(path){
            var current = $location.path().split('/')[2];
            return path === current ? 'active' : '';
        }
    }

})();
