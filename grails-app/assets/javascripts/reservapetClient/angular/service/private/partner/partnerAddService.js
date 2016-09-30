(function () {
    'use strict'

    angular.module('reservapetApp').factory('PartnerAddService', PartnerAddService);

    angular.$inject = ['ReservapetHttp', '$q'];
    function PartnerAddService(ReservapetHttp, $q) {
        var service = {};
        service.save = save;
        return service;

        function save(partner) {
            var deferred = $q.defer();
            ReservapetHttp.postCommand('api/partnerAdd/save', partner)
                .then(function(response){
                    deferred.resolve(response.data);
                }, function (response) {
                    deferred.reject(response)
                });
            return deferred.promise;
        }
    }
})();