(function() {
	'use strict';

	angular.module('reservapetApp').config(config);

	config.$inject = [ '$translateProvider' ];
	function config($translateProvider) {
		$translateProvider.useStaticFilesLoader({
			prefix : 'assets/reservapetClient/angular/i18n/',
			suffix : '.json'
		});
		$translateProvider.preferredLanguage('ptBR');
		$translateProvider.useSanitizeValueStrategy('sanitizeParameters');
	}
})();