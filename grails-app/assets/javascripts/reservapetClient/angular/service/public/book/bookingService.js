(function () {
    'use strict'

    angular.module('reservapetApp').factory('BookingService', BookingService);

    angular.$inject = ['ReservapetHttp'];
    function BookingService(ReservapetHttp) {
        var service = {};
        service.save = save;
        service.loadBreeds = loadBreeds;
        service.getPlan = getPlan;
        return service;

        function save(booking) {
            return ReservapetHttp.postCommand('api/public/booking/save', booking);
        }

        function loadBreeds(){
            return ReservapetHttp.get('api/public/booking/loadBreeds');
        }

        function getPlan(days, breedId){
            return ReservapetHttp.get('api/public/booking/getPlan', {params: {days: days, breedId: breedId}});
        }

    }
})();