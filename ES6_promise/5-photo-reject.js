export default function uploadPhoto(filename) {
  return new Promise((reject) => {
	const data = filename;
	reject(new Error(`${filename} cannot be processed`));

  });
}
