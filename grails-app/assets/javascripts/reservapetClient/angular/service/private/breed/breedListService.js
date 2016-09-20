(function () {
    'use strict'

    angular.module('reservapetApp').factory('BreedListService', BreedListService);

    angular.$inject = ['ReservapetHttp'];
    function BreedListService(ReservapetHttp) {
        var service = {};

        service.load = load;
        return service;

        function load() {
            return ReservapetHttp.get('api/breedList/load');
        }

    }
})();