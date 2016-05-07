export default['$locationProvider', '$stateProvider', '$urlRouterProvider',
	function ($locationProvider, $stateProvider, $urlRouterProvider) {
		$locationProvider.html5Mode(true);

		$stateProvider
			.state('app', {
				abstract: true,
				template: '<div ui-view></div>'
			});

		$urlRouterProvider.otherwise('/');
	}];