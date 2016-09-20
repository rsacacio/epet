(function () {
    'use strict';

    angular.module('reservapetApp').controller('BreedAddController', BreedAddController);

    BreedAddController.$inject = ['$scope', 'GlobalHolder', '$state', '$stateParams', 'BreedAddService'];

    function BreedAddController($scope, GlobalHolder, $state, $stateParams, BreedAddService) {
        var self = this;
        self.save = save;

        function save() {
            self.breed.category = self.categorySelected.id;
            BreedAddService.save(self.breed).success(function (response) {
               $state.go('private.breeds.list');
            });
        }

        function loadCategories(){
            BreedAddService.loadCategories().success(function (response) {
                self.categories = response.categories;
            });
        }
        loadCategories();
    }

})();
