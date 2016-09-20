(function () {
    'use strict';

    angular.module('reservapetApp').config(config);

    config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];
    function config($stateProvider, $urlRouterProvider, $locationProvider) {

        $stateProvider
            .state(
                'login',
                {
                    url: '/login',
                    views: {
                        'master': {
                            templateUrl: 'assets/reservapetClient/partials/public/login/login.html',
                            controller : 'LoginController as LoginCtrl'
                        }
                    }
                })
            // .state(
            //     'forget',
            //     {
            //         url: '/public/forget',
            //         views: {
            //             'master': {
            //                 templateUrl: 'assets/targestClient/partials/public/forget/forget.html',
            //                 controller : 'ForgetController as ForgetCtrl'
            //             }
            //         }
            //     }
            // )
            .state(
                'book',
                {
                    url: '/book',
                    views: {
                        'master': {
                            templateUrl: 'assets/reservapetClient/partials/public/book/book.html',
                            controller : 'BookingController as BookingCtrl'
                        }
                    }
                })
            .state(
                'private',
                {
                    views: {
                        'master': {
                            templateUrl: 'assets/reservapetClient/partials/private/homePrivate.html',
                            controller : 'HomePrivateController as HomeCtrl'
                        }
                    }
                })
            .state(
                'private.dashboard',
                {
                    url: '/dashboard',
                    views: {
                        'viewPrivate': {
                            templateUrl: 'assets/reservapetClient/partials/private/dashboard/dashboard.html',
                            controller : 'DashboardController as DashboardCtrl'
                        }
                    }
                })
            .state(
                'private.breeds',
                {
                    url: '/breeds',
                    views: {
                        'viewPrivate': {
                            templateUrl: 'assets/reservapetClient/partials/private/breed/breeds.html',
                            controller : 'BreedsController as BreedsCtrl'
                        }
                    }
                })
            .state(
                'private.breeds.add',
                {
                    url: '/add',
                    views: {
                        'viewBreeds': {
                            templateUrl: 'assets/reservapetClient/partials/private/breed/breedAdd.html',
                            controller : 'BreedAddController as BreedAddCtrl'
                        }
                    }
                })
            .state(
                'private.breeds.list',
                {
                    url: '/list',
                    views: {
                        'viewBreeds': {
                            templateUrl: 'assets/reservapetClient/partials/private/breed/breedList.html',
                            controller : 'BreedListController as BreedListCtrl'
                        }
                    }
                })
            .state(
                'private.bookings',
                {
                    url: '/bookings',
                    views: {
                        'viewPrivate': {
                            templateUrl: 'assets/reservapetClient/partials/private/book/bookings.html',
                            controller : 'BookingsController as BookingsCtrl'
                        }
                    }
                })
            .state(
                'private.categories',
                {
                    url: '/categories',
                    views: {
                        'viewPrivate': {
                            templateUrl: 'assets/reservapetClient/partials/private/category/categories.html',
                            controller : 'CategoriesController as CategoriesCtrl'
                        }
                    }
                })
            .state(
                'private.categories.add',
                {
                    url: '/add',
                    views: {
                        'viewCategories': {
                            templateUrl: 'assets/reservapetClient/partials/private/category/categoryAdd.html',
                            controller : 'CategoryAddController as CategoryAddCtrl'
                        }
                    }
                })
            .state(
                'private.categories.list',
                {
                    url: '/list',
                    views: {
                        'viewCategories': {
                            templateUrl: 'assets/reservapetClient/partials/private/category/categoryList.html',
                            controller : 'CategoryListController as CategoryListCtrl'
                        }
                    }
                })
            .state(
                'private.plans',
                {
                    url: '/plans',
                    views: {
                        'viewPrivate': {
                            templateUrl: 'assets/reservapetClient/partials/private/plan/plans.html',
                            controller : 'PlansController as PlansCtrl'
                        }
                    }
                })
            .state(
                'private.plans.add',
                {
                    url: '/add',
                    views: {
                        'viewPlans': {
                            templateUrl: 'assets/reservapetClient/partials/private/plan/planAdd.html',
                            controller : 'PlanAddController as PlanAddCtrl'
                        }
                    }
                })
            .state(
                'private.plans.list',
                {
                    url: '/list',
                    views: {
                        'viewPlans': {
                            templateUrl: 'assets/reservapetClient/partials/private/plan/planList.html',
                            controller : 'PlanListController as PlanListCtrl'
                        }
                    }
                })
        ;

        $urlRouterProvider.otherwise('/book');
    }

})();
