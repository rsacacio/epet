(function () {
    'use strict';

    angular.module('reservapetApp').controller('CategoryAddController', CategoryAddController);

    CategoryAddController.$inject = ['$scope', 'GlobalHolder', '$state', '$stateParams', 'CategoryAddService'];

    function CategoryAddController($scope, GlobalHolder, $state, $stateParams, CategoryAddService) {
        var self = this;
        self.save = save;

        function save() {
            CategoryAddService.save(self.category).success(function (response) {
               $state.go('private.categories.list');
            });
        }
    }

})();
