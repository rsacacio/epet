(function () {
    'use strict';

    angular.module('reservapetApp').controller('HeaderPrivateController', HeaderPrivateController);

    HeaderPrivateController.$inject = ['AuthenticationFactory', '$location', '$state', '$stateParams'];

    function HeaderPrivateController(AuthenticationFactory, $location, $state, $stateParams) {

        var self = this;
        self.logout = logout;
        self.isActive = isActive;

        function logout() {
            AuthenticationFactory.logout();
        };

        function isActive(path){
            var current = $location.path().split('/')[1];
            return path === current ? 'active' : '';
        }

    }

})();
