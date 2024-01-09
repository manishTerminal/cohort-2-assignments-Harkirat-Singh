import { useState } from "react";
// import CustomButton from "./components/CustomButton.jsx";
// function App() {
// 	const [count, setCount] = useState(9);

// 	return (
// 		<>
// 			<CustomButton count={count} setCount={setCount}></CustomButton>
// 		</>
// 	);
// }

// function CustomButton({count, setCount}) {
// 	function updateCount() {
// 		setCount(count + 1);
// 	}

// 	return <button onClick={updateCount}>Counter {count}</button>;
// }

function App() {
	//declared a state for todo
	const [todo, setTodo] = useState([
		{
			title: "code",
			description: "I code daily"
		},
		{
			title: "workout",
			description: "in morning 6-7"
		}
	]);

	function addTodo() {
		setTodo([
			...todo,
			{
				title: "new",
				description: "new desc"
			}
		]);
	}
	return (
		<>
			{/* <TodoList title={todo[0].title} description={todo[0].description}></TodoList>
    <TodoList title={todo[1].title} description={todo[1].description}></TodoList> */}
			<button onClick={addTodo}>Add random todo</button>

			{todo.map((todo) => {
				return (
					<TodoList
						title={todo.title}
						description={todo.description}
					></TodoList>
				);
			})}
		</>
	);
}

function TodoList(props) {
	return (
		<>
			<p>Title: {props.title}</p>
			<p>Description: {props.description}</p>
		</>
	);
}

export default App;
