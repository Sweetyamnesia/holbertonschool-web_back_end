import signUpUser from "./4-user-promise.js";
import uploadPhoto from "./5-photo-reject.js";

export default function handleProfileSignup(firstName, lastName, fileName) {
	const promise1 = signUpUser(firstName, lastName);
	const promise2 = uploadPhoto(fileName);

	return Promise
	  .allSettled([promise1, promise2])
	  .then((results) => {
		const userResult = results[0];
		const photoResult = results[1];

		if (userResult.status === 'fulfilled' && photoResult === 'fulfilled') {
          console.log(`${photo.body} ${user.firstName} ${user.lastName}`);
		} else {
          console.log("Signup system offline");
		}
		
	});
}
