(function () {
    'use strict';

    angular.module('reservapetApp').controller('BookingsController', BookingsController);

    BookingsController.$inject = ['$scope', 'GlobalHolder', '$state', '$stateParams'];

    function BookingsController($scope, GlobalHolder, $state, $stateParams) {
        var self = this;
    }

})();
