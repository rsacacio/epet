(function () {
    'use strict'

    angular.module('reservapetApp').factory('BreedAddService', BreedAddService);

    angular.$inject = ['ReservapetHttp'];
    function BreedAddService(ReservapetHttp) {
        var service = {};
        service.save = save;
        service.loadCategories = loadCategories;
        return service;

        function save(breed) {
            return ReservapetHttp.postCommand('api/breedAdd/save', breed);
        }

        function loadCategories(){
            return ReservapetHttp.get('api/breedAdd/loadCategories');
        }

    }
})();