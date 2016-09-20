(function () {
    'use strict'

    angular.module('reservapetApp').factory('CategoryListService', CategoryListService);

    angular.$inject = ['ReservapetHttp'];
    function CategoryListService(ReservapetHttp) {
        var service = {};

        service.load = load;
        return service;

        function load() {
            return ReservapetHttp.get('api/categoryList/load');
        }

    }
})();