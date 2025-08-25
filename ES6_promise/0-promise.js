export default function getResponseFromAPI() {
	return new Promise ((resolve, reject) => {
		const response = true;
		if (response) {
			resolve("data received");
		}
		else {
			reject("API error")
		}
	});
}