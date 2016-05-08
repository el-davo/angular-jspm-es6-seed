export default class TodoController {

	constructor() {

	}

	addItem(item) {
		this.list.push(item);
	}

	deleteItem(index) {
		this.list.splice(index, 1);
	}
}