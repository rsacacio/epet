(function () {
    'use strict';

    angular.module('reservapetApp').controller('PlanListController', PlanListController);

    PlanListController.$inject = ['$scope', 'GlobalHolder', '$state', '$stateParams', 'PlanListService'];

    function PlanListController($scope, GlobalHolder, $state, $stateParams, PlanListService) {
        var self = this;

        function load() {
            PlanListService.load().success(function (response) {
                self.plans = response.plans;
            })
        }

        load();
    }

})();
