import "./App.css";
import React, { memo, useEffect } from "react";
import { useInput, useTodo } from "./customHooks";
import { AppLayout, Input, List } from "./components";
import { getTodoList } from "./utils/ApiService";
const App = memo((props) => {
	const { inputValue, changeInput, clearInput, keyInput } = useInput();
	const { todo, addTodo, checkTodo, removeTodo, setTodo } = useTodo();
	const clearInputAndAddTodo = () => {
		clearInput();
		addTodo(inputValue);
	};

	const fetchData = () => {
		getTodoList().then((res) => {
			setTodo(res);
		});
	};

	useEffect(() => {
		fetchData();
	// eslint-disable-next-line
	},[]);

	return (
		<AppLayout>
			<Input
				inputValue={inputValue}
				onInputChange={changeInput}
				onButtonClick={clearInputAndAddTodo}
				onInputKeyPress={(event) => keyInput(event, clearInputAndAddTodo)}
			/>
			<List
				items={todo}
				onItemCheck={(id, completed) => checkTodo(id, completed)}
				onItemRemove={(id) => removeTodo(id)}
			/>
		</AppLayout>
	);
});

export default App;
