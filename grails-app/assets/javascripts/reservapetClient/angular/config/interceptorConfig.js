(function() {
	'use strict';

	angular.module('reservapetApp').config(config);

	config.$inject = [ '$httpProvider' ];
	function config($httpProvider) {

		$httpProvider.interceptors.push('mainLoadingSpinnerInterceptor');
		$httpProvider.interceptors.push('SessionInterceptor');
		//$httpProvider.interceptors.push('notifyInterceptor');
	}
})();