(function () {
    'use strict';

    angular.module('reservapetApp').controller('BreedListController', BreedListController);

    BreedListController.$inject = ['$scope', 'GlobalHolder', '$state', '$stateParams', 'BreedListService'];

    function BreedListController($scope, GlobalHolder, $state, $stateParams, BreedListService) {
        var self = this;

        function load() {
            BreedListService.load().success(function (response) {
                self.breeds = response.breeds;
            })
        }

        load();
    }

})();
