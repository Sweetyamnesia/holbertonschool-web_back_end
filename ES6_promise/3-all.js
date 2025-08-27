import { uploadPhoto, createUser } from "./utils.js";

export default function handleProfileSignup() {
	const promise1 = uploadPhoto();
	const promise2 = createUser();
	return Promise.all([promise1, promise2])
	.then(([photo, user]) => {
		console.log(photo.body, user.firstName, user.lastName);
		return [photo, user];
	})
	.catch(() => {
		console.log("Signup system offline");
		return Promise.reject(new Error());
	});
}
