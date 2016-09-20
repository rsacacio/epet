(function () {
    'use strict'

    angular.module('reservapetApp').factory('PlanAddService', PlanAddService);

    angular.$inject = ['ReservapetHttp'];
    function PlanAddService(ReservapetHttp) {
        var service = {};
        service.save = save;
        service.loadCategories = loadCategories;
        return service;

        function save(plan) {
            return ReservapetHttp.postCommand('api/planAdd/save', plan);
        }

        function loadCategories(){
            return ReservapetHttp.get('api/planAdd/loadCategories');
        }

    }
})();