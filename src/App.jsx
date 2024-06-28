import { useState, useEffect } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
	const [todoValue, setTodoValue] = useState("");
	const [todos, setTodos] = useState([]);

	function persist(newList) {
		localStorage.setItem("todos", JSON.stringify({ todos: newList }));
	}

	function handleAddTodos(newTodo) {
		const newTodoList = [...todos, newTodo];
		persist(newTodoList);
		setTodos(newTodoList);
	}

	function handleDeleteTodo(index) {
		const newTodoList = todos.filter((todo, todoIndex) => {
			return todoIndex !== index;
		});
		persist(newTodoList);
		setTodos(newTodoList);
	}

	function handleEditTodo(index) {
		const valueToBeEdited = todos[index];
		setTodoValue(valueToBeEdited);
		handleDeleteTodo(index);
	}

	useEffect(() => {
		if (!localStorage) {
			return;
		}

		let localTodos = localStorage.getItem("todos");
		if (!localTodos) {
			return;
		}
		localTodos = JSON.parse(localTodos).todos;
		setTodos(localTodos);
	}, []);

	return (
		<>
			<TodoInput
				todoValue={todoValue}
				setTodoValue={setTodoValue}
				handleAddTodos={handleAddTodos}
			/>
			<TodoList
				todos={todos}
				handleDeleteTodo={handleDeleteTodo}
				handleEditTodo={handleEditTodo}
			/>
		</>
	);
}

export default App;
