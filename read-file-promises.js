const fs = require("fs");
const filePath = "data/items.json";

readFile(filePath)
	.then(resultado => console.log('Esta ...', resultado))
	.catch(err => console.log('Este es un error', err));

function readFile(file) {
	return new Promise((resolve, reject) => {
		fs.readFile(filePath, (err, data) => {
			if (err) {
				reject(err);
			} else {
				const json = JSON.parse(data);
				resolve(data);
			}
		});
	});
}


fs.readFile(filePath, (err, data) => {
	if (err) {
		console.log("Error", err);
	} else {
		const json = JSON.parse(data);
		console.log("Los datos del fichero son", json);
	}
});