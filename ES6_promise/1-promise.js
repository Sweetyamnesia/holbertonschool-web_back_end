export default function getFullResponseFromAPI(success) {
	return new Promise ((resolve, reject) => {
		const response = true;
		if (response) {
			resolve("{status: 200, body: 'Success'}");
		}
		else {
			reject("The fake API is not working currently")
		}
	});
}