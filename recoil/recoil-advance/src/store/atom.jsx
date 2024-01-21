import { atom, selector } from "recoil";
import axios from "axios"

// export const notificationsAtom = atom({
// 	key: "notificationsAtom",
// 	default: {
// 		Notification: 10,
// 		Message: 20,
// 		Connection: 120
// 	}
// });

export const notificationsAtom = atom({
	key: "notificationsAtom",
	default: selector({
        key: "notification/default",
        get: async ()=>{
            const res = await axios.get("http://localhost:3100/notification")
            return res.data
        }
    })
});

//selector
export const profileSelector = selector({
	key: "profileSelector",
	get: ({ get }) => {
		const notification = get(notificationsAtom);
		return (
			notification.Notification + notification.Message + notification.Connection
		);
	}
});
