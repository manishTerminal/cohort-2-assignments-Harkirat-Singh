import { useContext, useState } from "react";
import { CountContext } from "./Context";

function App() {
	const [count, setCount] = useState(0);
	return (
		<>
      <CountContext.Provider value={count}>
			<Count setCount={setCount}></Count>
      </CountContext.Provider>
		</>
	);
}

function Count({ setCount }) {
	return (
		<div>
			<CountRenderer setCount={setCount}></CountRenderer>
		</div>
	);
}

function CountRenderer({setCount }) {
  const count = useContext(CountContext)
	return (
		<div>
			<div>{count}</div>
			<button onClick={() => setCount(count + 1)}>Increase</button>
			<button onClick={() => setCount(count - 1)}>Decrease</button>
		</div>
	);
}

// function Button({ count, setCount }) {
// 	return;
// 	<div>
// 		<button onClick={() => setCount(count + 1)}>Increase</button>
// 		<button onClick={() => setCount(count - 1)}>Decrease</button>
// 	</div>;
// }

export default App;
