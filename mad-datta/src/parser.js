const checkType = (val) => {
	if (!isNaN(val)) {
		return "number";
	} else if (val.toUpperCase() === "FALSE" || val.toUpperCase() === "TRUE") {
		return "boolean";
	}
	return "string";
};

const parser = (fileText) => {
	//Reads the file text and generates a list of dictionaries for each column
	let lines = fileText.split("\n");
	let headerLine = lines.shift().split("\t");
	let parsedData = [];
	headerLine.forEach((header) =>
		parsedData.push({ label: header, type: "", data: [] })
	);

	let columnedLines = lines.map((row) => row.split("\t"));
	console.log(columnedLines);

	//iterates through each column, line by line, and adds the data to the respective header in parsedData.
	//additionally checks to see if the column is consistently a number or a boolean and sets it as such or otherwise to a string type.
	for (let column = 0; column < parsedData.length; column++) {
		for (let row = 0; row < columnedLines.length; row++) {
			let type = checkType(columnedLines[row][column]);
			if (parsedData[column]["type"] === "") {
				parsedData[column]["type"] = type;
			} else if (parsedData[column]["type"] !== type) {
				parsedData[column]["type"] = "string";
			}
			parsedData[column]["data"].push(columnedLines[row][column]);
		}
	}

	//TODO: Add the parsed data into the database!
};
parser(
	"strings\tfloats\tbools\n1option1\t1.3\tfalse\n2option2\t1.6663\tFalse\n3option3\t44.3\ttrue"
); //Test call for building it //TODO: Delete this
export default parser;
