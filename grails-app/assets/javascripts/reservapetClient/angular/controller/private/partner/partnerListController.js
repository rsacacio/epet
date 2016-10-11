(function () {
    'use strict';

    angular.module('reservapetApp').controller('PartnerListController', PartnerListController);

    PartnerListController.$inject = ['$scope', 'GlobalHolder', '$state', '$stateParams', 'PartnerListService'];

    function PartnerListController($scope, GlobalHolder, $state, $stateParams, PartnerListService) {
        var self = this;

        function load() {
            PartnerListService.load().then(function (data) {
                self.partners = data.partners;
            })
        }

        load();
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    

})();
