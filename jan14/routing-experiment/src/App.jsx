import React, { Suspense, useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Todo from "./components/Todo";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
// import About from "./components/About";

const About = React.lazy(() => import("./components/About"));

function App() {
	return (
		<div>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path="/signup" element={<Signup />}></Route>
					<Route path="/signin" element={<Signin />}></Route>
					<Route path="/todo" element={<Todo />}></Route>
					<Route path="/contact" element={<Contact />}></Route>
					<Route
						path="/about"
						element={
							<Suspense fallback={"loading..."}>
								<About />
							</Suspense>
						}
					></Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
