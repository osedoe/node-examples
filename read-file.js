const fs = require("fs");
const filePath = "data/items.json";

fs.readFile(filePath, (err, data) => {
	if (err) {
		console.log("Error", err);
	} else {
		const json = JSON.parse(data);
		console.log("Los datos del fichero son", json);
	}
});