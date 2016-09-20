(function () {
    'use strict';

    angular.module('reservapetApp').controller('BookingController', BookingController);

    BookingController.$inject = ['$scope', 'GlobalHolder', '$state', '$stateParams', 'BookingService'];

    function BookingController($scope, GlobalHolder, $state, $stateParams, BookingService) {
        var self = this;
        self.save = save;

        self.booking = {};
        self.today = new Date();
        self.period = {startDate: null, endDate: null};

        function save() {
            BookingService.save(self.booking).success(function (response) {

            });
        }
        
        function getDays(){
            var timeDiff = Math.abs(self.period.endDate._d.getTime() - self.period.startDate._d.getTime());
            return Math.ceil(timeDiff / (1000 * 3600 * 24));
        }
        
        function loadBreeds() {
            BookingService.loadBreeds().success(function (response) {
               self.breeds = response.breeds;
            });
        }
        loadBreeds();
        
        $scope.$watch('BookingCtrl.period', function() {
            if(self.period.startDate != null && self.period.endDate != null){
                self.booking.days = getDays();
                self.booking.checkin = self.period.startDate;
                self.booking.checkout = self.period.endDate;
            }
        });

        $scope.$watch('BookingCtrl.breedSelected', function () {
            if(self.breedSelected){
                self.booking.breedId = self.breedSelected;
                buildPlan();
            }
        });

        function buildPlan() {
            BookingService.getPlan(self.booking.days, self.breedSelected.id).success(function (response) {
               self.plan = response.plan;
                self.showResume = true;
            });
        }
    }

})();
