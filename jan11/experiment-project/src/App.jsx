import React, { memo, useState } from "react";

function App() {
	return (
		<>
			<CardWrapper innerComponent={<TextComponent/>}></CardWrapper>
			<CardWrapper innerComponent={<TextComponent/>}></CardWrapper>
			<CardWrapper innerComponent={<TextComponent/>}></CardWrapper>
			<CardWrapper innerComponent={<TextComponent/>}></CardWrapper>
			<CardWrapper innerComponent={<TextComponent/>}></CardWrapper>
		</>
	);
}

function TextComponent() {
	return <div>hi there</div>;
}

function CardWrapper({ innerComponent }) {
	return (
		<div
			style={{
				border: "1px solid black",
				padding: "10px",
				margin: "10px",
				boxShadow: "2px 2px 10px blue"
			}}
		>
			{innerComponent}
		</div>
	);
}

export default App;

//--------------------------------------------------------------------------------------------
//KEY

// let counter = 4;
// function App() {
// 	const [todos, setTodos] = useState([
// 		{
// 			id: 1,
// 			title: "gym",
// 			description: "today"
// 		},
// 		{
// 			id: 2,
// 			title: "code",
// 			description: "tomorrow"
// 		},
// 		{
// 			id: 3,
// 			title: "research",
// 			description: "next week"
// 		}
// 	]);
// 	return (
// 		<>
// 			<button
// 				onClick={() => {
// 					setTodos([
// 						...todos,
// 						{
// 							id: counter++,
// 							title: "bath",
// 							description: "jaldi"
// 						}
// 					]);
// 				}}
// 			>
// 				Add todo
// 			</button>
// 			{todos.map((todo) => {
// 				return (
// 					<Todo
// 						key={todo.id}
// 						title={todo.title}
// 						description={todo.description}
// 					></Todo>
// 				);
// 			})}
// 		</>
// 	);
// }

// function Todo({ title, description }) {
// 	return (
// 		<div>
// 			<p>{title}</p>
// 			<p>{description}</p>
// 		</div>
// 	);
// }

// export default App;

//-------------------------------------------------------------------------------------
//MEMO use:-

// function App() {
// 	const [title, setTitle] = useState("Manish Kumar");
// 	return (
// 		<>
// 			<button
// 				onClick={() => {
// 					setTitle("My name is " + Math.random());
// 				}}
// 			>
// 				Click me to change the title
// 			</button>
// 			<Header title={title}></Header>
// 			<Header title="Harkirat Singh"></Header>
// 			<Header title="Harkirat Singh"></Header>
// 			<Header title="Harkirat Singh"></Header>
// 			<Header title="Harkirat Singh"></Header>
// 			<Header title={title}></Header>
// 			<Header title="Harkirat Singh"></Header>
// 			<Header title="Harkirat Singh"></Header>
// 		</>
// 	);
// }

// const Header = memo(function Header({ title }) {
// 	return <div>{title}</div>;
// });

// export default App;
// function HeaderButton() {
// 	const [title, setTitle] = useState("Manish Kumar");
// 	return (
// 		<>
// 			<button
// 				onClick={() => {
// 					setTitle(Math.random());
// 				}}
// 			>
// 				Click me to change the title
// 			</button>
// 			<Header title={title}></Header>
// 		</>
// 	);
// }
