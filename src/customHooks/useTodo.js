import { useState } from "react";
import { addTodo, deleteTodo, markTodoComplete } from "../utils/ApiService";
export const useTodo = (initialValue = []) => {
	const [todo, setTodo] = useState(initialValue);
	console.log(todo);
	return {
		todo,
		addTodo: (title) => {
			if (title !== "") {
				addTodo(title).then((response) => {
					setTodo(
						todo.concat({
							title,
							completed: false,
						})
					);
				});
			}
		},
		checkTodo: (id, completed) => {
			markTodoComplete(id, completed).then((response) => {
				setTodo(
					todo.map((todo) => {
						if (id === todo.id) {
							todo.completed = !todo.completed;
						}
						return todo;
					})
				);
			});
		},
		removeTodo: (id) => {
			deleteTodo(id, setTodo).then((res) => {
				setTodo(todo.filter((todo) => id !== todo.id));
			});
		},
		setTodo,
	};
};

export default useTodo;
