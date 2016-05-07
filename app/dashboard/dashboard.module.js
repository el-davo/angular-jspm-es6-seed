import router from './dashboard.route';
import DashboardController from './dashboard.controller';
import TodoComponent from './list/todo.component';

angular.module('testApp.dashboard', [])
	.config(router)
	.controller('DashboardController', DashboardController)
	.component('todo', TodoComponent);