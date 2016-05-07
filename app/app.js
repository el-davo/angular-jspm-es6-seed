import angular from 'angular';

import 'core/app.core.module';
import 'dashboard/dashboard.module.js';

import router from './app.route'

angular.module('testApp', [
	'app.core',

	// Features
	'testApp.dashboard'
]).config(router);