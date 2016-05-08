'use strict';

import TodoController from './todo.controller';

describe('TodoController', () => {

	let controller;

	beforeEach(() => {
		controller = new TodoController();
		controller.list = [];
	});

	describe('addItem()', () => {

		it('should add item to the list', () => {
			controller.addItem('test 1');
			controller.addItem('test 2');
			expect(controller.list.length).toBe(2);
		});

	});

	describe('deleteItem()', () => {

		it('should remove an item from the list', () => {
			controller.addItem('test');
			expect(controller.list.length).toBe(1);
			controller.deleteItem(0);
			expect(controller.list.length).toBe(0);
		});

	});
});