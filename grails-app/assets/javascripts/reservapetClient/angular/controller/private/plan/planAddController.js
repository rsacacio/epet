(function () {
    'use strict';

    angular.module('reservapetApp').controller('PlanAddController', PlanAddController);

    PlanAddController.$inject = ['$scope', 'GlobalHolder', '$state', '$stateParams', 'PlanAddService'];

    function PlanAddController($scope, GlobalHolder, $state, $stateParams, PlanAddService) {
        var self = this;
        self.save = save;

        function save() {
            self.plan.categoryId = self.categorySelected.id;
            PlanAddService.save(self.plan).success(function (response) {
               $state.go('private.plans.list');
            });
        }

        function loadCategories(){
            PlanAddService.loadCategories().success(function (response) {
                self.categories = response.categories;
            });
        }
        loadCategories();
    }

})();
