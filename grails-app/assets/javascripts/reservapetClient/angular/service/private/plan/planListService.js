(function () {
    'use strict'

    angular.module('reservapetApp').factory('PlanListService', PlanListService);

    angular.$inject = ['ReservapetHttp'];
    function PlanListService(ReservapetHttp) {
        var service = {};

        service.load = load;
        return service;

        function load() {
            return ReservapetHttp.get('api/planList/load');
        }

    }
})();