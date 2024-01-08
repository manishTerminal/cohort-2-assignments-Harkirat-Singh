import { useState } from "react";

function App() {
	const [color, setColor] = useState("white");
	return (
		<>
			<div
				className="h-screen w-full duration-200"
				style={{ backgroundColor: color }}
			>
				<button
					className="px-8 py-2 text-white bg-red-500 rounded-lg mx-8 my-8"
					onClick={() => setColor("red")}
				>
					red
				</button>
				<button
					className="px-8 py-2 text-white bg-green-500 rounded-lg mx-8 my-8"
					onClick={() => setColor("green")}
				>
					green
				</button>
				<button
					className="px-8 py-2 text-white bg-yellow-600 rounded-lg mx-8 my-8"
					onClick={() => setColor("yellow")}
				>
					yellow
				</button>
			</div>
		</>
	);
}

export default App;
