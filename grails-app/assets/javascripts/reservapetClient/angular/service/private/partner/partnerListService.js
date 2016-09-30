(function () {
    'use strict'

    angular.module('reservapetApp').factory('PartnerListService', PartnerListService);

    angular.$inject = ['ReservapetHttp', '$q'];
    function PartnerListService(ReservapetHttp, $q) {
        var service = {};
        service.load = load;
        return service;

        function load() {
            var deferred = $q.defer();
            ReservapetHttp.get('api/partnerList/load')
                .then(function(response){
                    deferred.resolve(response.data);
                }, function (response) {
                    deferred.reject(response)
                });
            return deferred.promise;
        }

    }
})();