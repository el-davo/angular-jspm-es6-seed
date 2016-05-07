import _ from 'lodash';

export default class TodoController {

	constructor() {

	}

	addItem(item) {
		this.list.push(item);
	}

	deleteItem(index) {
		_(this.list).splice(index, 1).value();
	}
}