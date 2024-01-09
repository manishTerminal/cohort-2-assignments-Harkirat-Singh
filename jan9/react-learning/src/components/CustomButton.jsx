function CustomButton(props) {
	function updateCount() {
		props.setCount(props.count + 1);
	}

	return (
		<>
			<button onClick={updateCount}>Counter {props.count}</button>
		</>
	);
}

export default CustomButton;
