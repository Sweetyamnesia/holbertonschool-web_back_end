export default function handleResponseFromAPI(promise) {
	return new Promise((resolve, reject) => {
		const response = true;
		if (response) {
			resolve("{status: 200, body: 'Success'}");
			console.log("Got a response from the API");
		}
		else {
			reject(Error);
			console.log("Got a response from the API");
		}
	});
}