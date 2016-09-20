(function () {
    'use strict';

    angular.module('reservapetApp').controller('CategoryListController', CategoryListController);

    CategoryListController.$inject = ['$scope', 'GlobalHolder', '$state', '$stateParams', 'CategoryListService'];

    function CategoryListController($scope, GlobalHolder, $state, $stateParams, CategoryListService) {
        var self = this;

        function load() {
            CategoryListService.load().success(function (response) {
                self.categories = response.categories;
            })
        }

        load();
    }

})();
