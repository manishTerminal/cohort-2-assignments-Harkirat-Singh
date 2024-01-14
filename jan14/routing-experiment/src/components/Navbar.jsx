import { useNavigate } from "react-router-dom";

export default function Navbar() {
	const navigate = useNavigate();
	return (
		<div className=" bg-gray-900 h-10 text-white flex items-center justify-between px-4">
			<button className="text-white p-1 m-1" onClick={() => navigate("/signup")}>SignUp</button>
			<button className="text-white p-1 m-1" onClick={() => navigate("/signin")}>SignIn</button>
			<button className="text-white p-1 m-1" onClick={() => navigate("/todo")}>Todo</button>
			<button className="text-white p-1 m-1" onClick={() => navigate("/contact")}>Contact</button>
			<button className="text-white p-1 m-1" onClick={() => navigate("/about")}>About</button>
		</div>
	);
}
