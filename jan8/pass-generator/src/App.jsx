import { useCallback, useEffect, useState, useRef } from "react";
import "./App.css";

function App() {
	const [length, setLength] = useState(8);
	const [numberAllowed, setNumberAllowed] = useState(false);
	const [specialCharacterAllowed, setSpecialCharacterAllowed] = useState(false);
	const [password, setPassword] = useState("");

	//use ref hook
	const passwordRef = useRef(null);

	const passwordGenerator = useCallback(() => {
		let pass = "";
		let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
		const number = "0123456789";
		const specialChar = "!@#$%^&*()+_";

		if (numberAllowed) str += number;
		if (specialCharacterAllowed) str += specialChar;

		for (let i = 1; i <= length; i++) {
			const char = Math.floor(Math.random() * str.length + 1);
			pass += str.charAt(char);
		}

		setPassword(pass);
	}, [length, numberAllowed, specialCharacterAllowed]);

	const copyPasswordClipboard = useCallback(()=>{
		passwordRef.current?.select()
		window.navigator.clipboard.writeText(password)
	}, [password])

	useEffect(() => {
		passwordGenerator();
	}, [length, numberAllowed, specialCharacterAllowed, passwordGenerator]);

	return (
		<>
			<div className="h-screen w-screen bg-gray-700 flex justify-center items-center  ">
				<div className="bg-gray-600 w-max px-8 py-8 h-max">
					<h1 className="text-white ">Password Generaor</h1>
					<input
						className="px-4 py-4 outline-none"
						type="text"
						placeholder="Password"
						value={password}
						readOnly
						ref={passwordRef}
					></input>
					<button
						onClick={copyPasswordClipboard}
						className="bg-blue-500 text-white py-4 px-2 hover:bg-sky-300"
					>
						Copy
					</button>
					<br></br>
					<input
						type="range"
						min={8}
						max={50}
						value={length}
						className="cursor-pointer"
						id="length"
						onChange={(e) => setLength(e.target.value)}
					></input>
					<label htmlFor="length" className="text-white px-2">
						Length {length}
					</label>
					<input
						type="checkbox"
						id="number"
						defaultChecked={numberAllowed}
						onChange={() => {
							setNumberAllowed((prev) => !prev);
						}}
					></input>
					<label htmlFor="number" className="text-white px-2">
						Numbers
					</label>
					<input
						type="checkbox"
						id="special-char"
						defaultChecked={specialCharacterAllowed}
						onChange={() => {
							setSpecialCharacterAllowed((prev) => !prev);
						}}
					></input>
					<label htmlFor="special-char" className="text-white px-2">
						Special Character
					</label>
				</div>
			</div>
		</>
	);
}

export default App;
