import signUpuser from "./4-user-promise";
import uploadPhoto from "./5-photo-reject";

export default function handleProfileSignup(firstName, lastName, fileName) {
	const promise1 = signUpuser();
		const promise2 = uploadPhoto();
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
