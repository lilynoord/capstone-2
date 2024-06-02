function IncidenceOverTime(yData, xData) {
	let series = yData.data.reduce((acc, data) => {
		!acc.includes(data) ? acc.push(data) : null;
		return acc;
	}, []);
	return series;
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
	console.log("IoT");
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
	console.log(data);
	return data;
};

export default AOverBAnalyzer;
