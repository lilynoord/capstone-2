import { DateTime } from "luxon";

const checkType = (val) => {
	if (!isNaN(val)) {
		return "number";
	} else if (val.toUpperCase() === "FALSE" || val.toUpperCase() === "TRUE") {
		return "boolean";
	} else if (DateTime.fromISO(val).isValid) {
		return "date";
	}
	return "string";
};

const dataConverter = (data, type) => {
	if (type === "number") {
		return data.map((d) => Number(d));
	} else if (type === "boolean") {
		return data.map((d) => Boolean(d.toUpperCase()));
	} else if (type === "date") {
		return data.map((d) => DateTime.fromISO(d).toISODate());
	}
	return data;
};
const parser = (fileText) => {
	//Reads the file text and generates a list of dictionaries for each column
	let lines = fileText.split("\r\n");
	let headerLine = lines.shift().split("\t");
	let parsedData = [];
	headerLine.forEach((header) =>
		parsedData.push({ label: header, type: "", data: [] })
	);

	let columnedLines = lines.map((row) => row.split("\t"));

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
		parsedData[column]["data"] = dataConverter(
			parsedData[column]["data"],
			parsedData[column]["type"]
		);
		if (parsedData[column]["type"] === "string") {
			parsedData[column]["options"] = [];
			parsedData[column]["data"].forEach((d) => {
				if (!parsedData[column]["options"].includes(d)) {
					parsedData[column]["options"].push(d);
				}
			});
		}
	}

	return parsedData;
};
// parser(
// 	"strings\tfloats\tbools\n1option1\t1.3\tfalse\n2option2\t1.6663\tFalse\n3option3\t44.3\ttrue"
// ); //Test call for building it //TODO: Delete this
export default parser;
