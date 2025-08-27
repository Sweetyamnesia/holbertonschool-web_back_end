export default function uploadPhoto(fileName) {
  return new Promise((reject) => {
	const data = fileName;
	reject(new Error(`${fileName} cannot be processed`));

  });
}
