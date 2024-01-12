import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
	const [selectedId, setselectedId] = useState(1);
	return (
		<div>
			<button
				onClick={() => {
					setselectedId(1);
				}}
			>
				1
			</button>
			<button
				onClick={() => {
					setselectedId(2);
				}}
			>
				2
			</button>
			<button
				onClick={() => {
					setselectedId(3);
				}}
			>
				3
			</button>
			<button
				onClick={() => {
					setselectedId(4);
				}}
			>
				4
			</button>
			<Todos id={selectedId}></Todos>
		</div>
	);
}

function Todos({ id }) {
	const [todos, setTodos] = useState({});

	const fetchdata = () => {
		const todo = axios
			.get("https://sum-server.100xdevs.com/todo?id=" + id)
			.then((res) => {
				console.log(res.data.todo);
				setTodos(res.data.todo);
			});
	};

	useEffect(() => {
		fetchdata();
	}, [id]);

	return (
		<div>
			id: {id}
			<h1>{todos.title}</h1>
			<p>{todos.description}</p>
		</div>
	);
}

// function Todos({ props }) {
// 	return (
// 		<>

// 		</>
// 	);
// }

export default App;

// function App() {
// 	const [user, setUser] = useState({});

// 	useEffect(() => {
// 		setInterval(() => {
// 			axios.get("https://randomuser.me/api/").then(async (res) => {
// 				const data = res.data.results[0];
// 				setUser(data);
// 			});
// 		}, 5000);
// 	}, [setUser]);

// 	console.log(user);

// 	return (
// 		<>
//       {/* <img src={user.picture}></img>
//       <h2>{user.name.title} {user.name.first} {user.name.last}</h2> */}
// 			<p>{user.gender}</p>
// 			<p>{user.cell}</p>

// 		</>
// 	);
// }

// export default App;
