import { uploadPhoto, createUser } from "./utils.js";

export default function handleProfileSignup() {
	const promise1 = uploadPhoto();
	const promise2 = createUser();
	return Promise.all([promise1, promise2]).then(data => {
		const [photo, user] = data;
		console.log(photo.body, user.firstName, user.lastName);
		return (data);
	})
	.catch(error => {
		console.log("Signup system offline");
		return Promise.reject(new Error());
	});
}
