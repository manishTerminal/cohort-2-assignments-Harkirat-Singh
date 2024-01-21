import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
import { countAtom } from "./store/atoms/count";

function App() {
	return (
		<div>
			<RecoilRoot>
				<Count></Count>
			</RecoilRoot>
		</div>
	);
}

function Count() {
	return (
		<div>
			<CountRenderer></CountRenderer>
			<Button></Button>
      <NumberType></NumberType>
		</div>
	);
}

function CountRenderer() {
	const count = useRecoilValue(countAtom);
	return <div>{count}</div>;
}

function Button() {
	const [count, setCount] = useRecoilState(countAtom);
	return (
		<div>
			<button
				onClick={() => {
					setCount(count + 1);
				}}
			>
				Increase
			</button>
			<button
				onClick={() => {
					setCount(count - 1);
				}}
			>
				Decrease
			</button>
		</div>
	);
}

function NumberType() {
	const count = useRecoilValue(countAtom);
	return <div>{count % 2 == 0 ? <h2>It is even</h2> : <h2>It is odd</h2>}</div>;
}

export default App;
