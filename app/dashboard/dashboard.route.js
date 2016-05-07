export default ['$stateProvider', function ($stateProvider) {

	$stateProvider
		.state('app.dashboard', {
			url: '/',
			templateUrl: 'dashboard/dashboard.html',
			controller: 'DashboardController',
			controllerAs: 'vm',
			authenticate: true
		});
}]