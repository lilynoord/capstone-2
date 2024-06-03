import incidenceOverTime from "./incidenceOverTime";

function incidenceOverNumber(yData, xData) {} //Line Graph

function incidenceOverIncidence(yData, xData) {} //Bar Graph

function numberOverTime(yData, xData) {} //Line Graph

function numberOverNumber(yData, xData) {} //Line Graph

function numberOverIncidence(yData, xData) {} //Bar Graph

function timeOverTime(yData, xData) {} //Line graph?

function timeOverNumber(yData, xData) {} //Line graph

function timeOverIncidence(yData, xData) {} //Line graph

const handleGraph = (yType, xType, yData, xData) => {
	if (yType === "incidence" && xType === "time") {
		return incidenceOverTime(yData, xData);
	} else if (yType === "incidence" && xType === "number") {
		return incidenceOverNumber(yData, xData);
	} else if (yType === "incidence" && xType === "incidence") {
		return incidenceOverIncidence(yData, xData);
	} else if (yType === "number" && xType === "time") {
		return numberOverTime(yData, xData);
	} else if (yType === "number" && xType === "number") {
		return numberOverNumber(yData, xData);
	} else if (yType === "number" && xType === "incidence") {
		return numberOverIncidence(yData, xData);
	} else if (yType === "time" && xType === "time") {
		return timeOverTime(yData, xData);
	} else if (yType === "time" && xType === "number") {
		return timeOverNumber(yData, xData);
	} else if (yType === "time" && xType === "incidence") {
		return timeOverIncidence(yData, xData);
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
