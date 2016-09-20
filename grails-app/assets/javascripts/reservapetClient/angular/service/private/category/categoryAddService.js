(function () {
    'use strict'

    angular.module('reservapetApp').factory('CategoryAddService', CategoryAddService);

    angular.$inject = ['ReservapetHttp'];
    function CategoryAddService(ReservapetHttp) {
        var service = {};
        service.save = save;
        return service;

        function save(category) {
            return ReservapetHttp.postCommand('api/categoryAdd/save', category);
        }

    }
})();