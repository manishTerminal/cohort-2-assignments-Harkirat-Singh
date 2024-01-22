import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className="flex justify-around">
			<div className="bg-red-400">First</div>
			<div className="bg-blue-400">Second</div>
			<div className="bg-purple-400">Third</div>
			<div className="bg-orange-400">Fourth</div>
		</div>
	);
}

export default App;
