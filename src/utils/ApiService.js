import axios from "axios";

const API_ENDPOINT = "https://jsonplaceholder.typicode.com/todos";
const TODO_LIMIT = 10; // can be moved to ui control

export const getTodoList = () => {
	return axios
		.get(API_ENDPOINT + `?_limit=${TODO_LIMIT}`)
		.then((response) => {
			return response.data;
		})
		.catch((error) => {
			console.error(error);
			return [];
		});
};

export const deleteTodo = (TodoId) => {
	return axios
		.get(API_ENDPOINT + `?id=${TodoId}`)
		.then((response) => {
			return 1;
		})
		.catch((error) => {
			console.error(error);
			return 0;
		});
};

export const markTodoComplete = (id, completed) => {
	return axios
		.patch(API_ENDPOINT + `/${id}`, { completed: completed })
		.then((response) => {
			return response.data;
		})
		.catch((error) => {
			console.error(error);
		});
};

export const addTodo = (todoText) => {
	return axios
		.post(API_ENDPOINT, { todoText, completed: false })
		.then((response) => {
			return response.data;
		})
		.catch((error) => {
			console.error(error);
		});
};
