import uploadPhoto from "./utils.js";
import createUser from "./utils.js";

export default function handleProfileSignup() {
	const promise1 = uploadPhoto();
	const promise2 = createUser();
	Promise.all([promise1, promise2]).then(data => {
		return ({body, firstName, lastName});
	})
	.catch(error => {
		console.log("Signup system offline");
		return new Error();
	});
}