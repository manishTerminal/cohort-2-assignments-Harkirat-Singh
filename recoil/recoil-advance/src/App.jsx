import { RecoilRoot, useRecoilValue } from "recoil";
import { notificationsAtom, profileSelector } from "./store/atom";

function App() {
	return (
		<div>
			<RecoilRoot>
				<NavBar></NavBar>
			</RecoilRoot>
		</div>
	);
}

function NavBar() {
	const notification = useRecoilValue(notificationsAtom);
  const totalNotification = useRecoilValue(profileSelector)

	return (
		<div>
			<button>Home</button>
			<button>Notification ({notification.Notification})</button>
			<button>Message ({notification.Message})</button>
			<button>Connection ({notification.Connection > 99 ? "99+": notification.Connection})</button>
			<button>Profile ({totalNotification})</button>
		</div>
	);
}

export default App;
