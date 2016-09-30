(function () {
    'use strict';

    angular.module('reservapetApp').controller('PartnerAddController', PartnerAddController);

    PartnerAddController.$inject = ['$scope', 'GlobalHolder', '$state', '$stateParams', 'PartnerAddService'];

    function PartnerAddController($scope, GlobalHolder, $state, $stateParams, PartnerAddService) {
        var self = this;
        self.save = save;

        function save() {
            PartnerAddService.save(self.partner).then(function (data) {
               $state.go('private.partners.list');
            });
        }
    }

})();
