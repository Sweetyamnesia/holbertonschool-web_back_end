export default function signUpUser(firstName, lastName) {
	return new Promise((resolve) => {
		const data = {firstName, lastName};
		resolve(data);
		});
	}
