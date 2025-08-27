import { signUpuser } from "./4-user-promise.js";
import { uploadPhoto } from "./5-photo-reject.js";

export default function handleProfileSignup() {
	return Promise
	  .all(([signUpuser(), uploadPhoto()]))
	  .then(([user, photo]) => {
		console.log(`${photo.body} ${user.firstName} ${user.lastName}`);
	   })
	    .catch(() => {
			console.log("Signup system offline");
		});
}
