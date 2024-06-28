const TodoCard = (props) => {
	const { children, handleDeleteTodo, handleEditTodo, index} = props;
	return (
		<li className='todoItem'>
			<input type="checkbox" name="completed" />
			{children}
			<div className='actionsContainer'>
				<button onClick={() => handleEditTodo(index)}>
					<i className='fa-regular fa-pen-to-square'></i>
				</button>
				<button onClick={() => handleDeleteTodo(index)}>
					<i className='fa-regular fa-trash-can'></i>
				</button>
			</div>
		</li>
	);
};

export default TodoCard;
