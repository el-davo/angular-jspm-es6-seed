import TodoController from './todo.controller';
import template from './todo-component.html!ng-template';

export default {
	bindings: {
		list: '='
	},
	controllerAs: 'vm',
	controller: TodoController,
	templateUrl: template.templateUrl
}
