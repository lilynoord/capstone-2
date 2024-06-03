import { DateTime } from "luxon";
const colors = [
	"gray.1",
	"grape.1",
	"blue.1",
	"green.1",
	"orange.1",
	"violet.1",
	"red.1",
	"cyan.1",
	"lime.1",
	"pink.1",
	"indigo.1",
	"teal.1",
	"yellow.1",
	"gray.5",
	"grape.5",
	"blue.5",
	"green.5",
	"orange.5",
	"violet.5",
	"red.5",
	"cyan.5",
	"lime.5",
	"pink.5",
	"indigo.5",
	"teal.5",
	"yellow.5",
	"gray.9",
	"grape.9",
	"blue.9",
	"green.9",
	"orange.9",
	"violet.9",
	"red.9",
	"cyan.9",
	"lime.9",
	"pink.9",
	"indigo.9",
	"teal.9",
	"yellow.9",
];
function basicLineDataBreakdown(yData, xData) {
	let series = yData.data.reduce((acc, data) => {
		!acc.includes(data) ? acc.push(data) : null;
		return acc;
	}, []);
	let colorIndex = 0;
	series = series.map((m) => {
		colorIndex >= colors.length ? (colorIndex = 0) : colorIndex++;
		return { name: m, color: colors[colorIndex] };
	});
	const yLen = yData.data.length;
	const xLen = xData.data.length;
	let pairwise = [];
	if (yLen !== xLen) {
		throw new Error("Data range mismatch");
	} else {
		for (let i = 0; i < yLen; i++) {
			pairwise.push([yData.data[i], xData.data[i]]);
		}
	}

	return [series, pairwise];
}

function sortDataByDate(unsortedData) {
	let data = [];
	const unsortedKeys = Object.keys(unsortedData);
	let sortedKeys = [];
	unsortedKeys.map((date) => {
		let index = 0;
		while (index < sortedKeys.length) {
			if (DateTime.fromISO(date) < DateTime.fromISO(sortedKeys[index])) {
				break;
			}
			index++;
		}
		sortedKeys.splice(index, 0, date);
	});
	//console.log(sortedKeys);
	sortedKeys.map((key) => {
		//console.log(unsortedData, key, typeof key, unsortedData[key]);
		data.push(unsortedData[key]);
	});
	//console.log(data);
	return data;
}
function IncidenceOverTime(yData, xData) {
	let dataPackage = {};
	dataPackage.chartType = "line";
	let pairwise;
	[dataPackage.series, pairwise] = basicLineDataBreakdown(yData, xData);
	//OOP:
	//1: Combine y-x pairwise - list of lists
	//2: Create blank dict of values:
	//   blank = {date:, Apples:0,Oranges:0,...}
	//3: Operate through y-x list, sorting into a dict of blanks by date
	//4: Place blanks into list sorted by date low->high
	//5: Optional but ideal: Go through the list and tween any gaps
	let blank = {};
	console.log("blank object: ", blank);
	dataPackage.series.map((data) => {
		console.log(data);
		blank[data.name] = 0;
	});
	let unsortedData = {};
	blank.date = "";
	console.log(blank, blank.date);

	pairwise.map((pair) => {
		if (Object.keys(unsortedData).includes(pair[1])) {
			unsortedData[pair[1]][pair[0]] += 1;
		} else {
			unsortedData[pair[1]] = structuredClone(blank);

			unsortedData[pair[1]].date = pair[1];
			unsortedData[pair[1]][pair[0]] += 1;
		}
	});
	dataPackage.data = sortDataByDate(unsortedData);
	dataPackage.dataKey = "date";
	return dataPackage;
} //Line Graph

function IncidenceOverNumber(yData, xData) {} //Line Graph

function IncidenceOverIncidence(yData, xData) {} //Bar Graph

function NumberOverTime(yData, xData) {} //Line Graph

function NumberOverNumber(yData, xData) {} //Line Graph

function NumberOverIncidence(yData, xData) {} //Bar Graph

function TimeOverTime(yData, xData) {} //Line graph?

function TimeOverNumber(yData, xData) {} //Line graph

function TimeOverIncidence(yData, xData) {} //Line graph

const handleGraph = (yType, xType, yData, xData) => {
	if (yType === "incidence" && xType === "time") {
		return IncidenceOverTime(yData, xData);
	} else if (yType === "incidence" && xType === "number") {
		return IncidenceOverNumber(yData, xData);
	} else if (yType === "incidence" && xType === "incidence") {
		return IncidenceOverIncidence(yData, xData);
	} else if (yType === "number" && xType === "time") {
		return NumberOverTime(yData, xData);
	} else if (yType === "number" && xType === "number") {
		return NumberOverNumber(yData, xData);
	} else if (yType === "number" && xType === "incidence") {
		return NumberOverIncidence(yData, xData);
	} else if (yType === "time" && xType === "time") {
		return TimeOverTime(yData, xData);
	} else if (yType === "time" && xType === "number") {
		return TimeOverNumber(yData, xData);
	} else if (yType === "time" && xType === "incidence") {
		return TimeOverIncidence(yData, xData);
	}
};

const getAxisType = (axis) => {
	if (axis === "string" || axis === "boolean") {
		return "incidence";
	} else if (axis === "number") {
		return "number";
	} else if (axis === "date") {
		return "time";
	}
};

const AOverBAnalyzer = () => {
	const parsedData = JSON.parse(localStorage.getItem("parsed_data"));

	const valueA = localStorage.getItem("valueA");
	const valueB = localStorage.getItem("valueB");
	const filteredA = parsedData.filter((m) => m.label === valueA)[0];
	const filteredB = parsedData.filter((m) => m.label === valueB)[0];
	const yType = getAxisType(filteredA.type);
	const xType = getAxisType(filteredB.type);

	const data = handleGraph(yType, xType, filteredA, filteredB);
	return data;
};

export default AOverBAnalyzer;
