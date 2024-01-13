import React, { useState } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Contact from "./components/Contact";
import About from "./components/About";

function App() {
	const navigate = useNavigate();
	return (
		<div>
			<button
				onClick={() => {
					navigate("/");
				}}
			>
				HomeContact
			</button>
			<button
				onClick={() => {
					navigate("/About");
				}}
			>
				About Us
			</button>
			<button
				onClick={() => {
					navigate("/Contact");
				}}
			>
				Contact Us
			</button>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Dashboard />}></Route>
					<Route path="/About" element={<Contact />}></Route>
					<Route path="/Contact" element={<About />}></Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;

// function App() {
// 	const [count, setCount] = useState(0);
// 	return (
// 		<>
// 			<button
// 				onClick={() => {
// 					setCount(count + 1);
// 				}}
// 			>
// 				Counter {count}
// 			</button>
// 			<br></br>
// 			<Child></Child>
// 		</>
// 	);
// }

// memo - the child components willnot rerender if the props are not changed
// const Child = React.memo(function () {
// 	console.log("child renders");
// 	return <button>Something</button>;
// });

// export default App;

// import { useMemo, useState } from "react";
// import "./App.css";

// function App() {
// 	const [count, setCount] = useState(0);
// 	const [input, setInput] = useState(0);

// 	let totalSums = useMemo(() => {
// 		let totalSum = 0;
// 		for (let i = 0; i <= input; i++) {
// 			totalSum += i;
// 		}
//     return totalSum
// 	}, [input]);

// 	return (
// 		<>
// 			<input
// 				id="num"
// 				type="number"
// 				onChange={(e) => setInput(e.target.value)}
// 			></input>
// 			<br></br>
// 			<p>Sum is {totalSums}</p>
// 			<button
// 				onClick={() => {
// 					setCount(count + 1);
// 				}}
// 			>
// 				Counter ({count})
// 			</button>
// 		</>
// 	);
// }

// export default App;
