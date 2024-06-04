import incidenceOverTime from "./incidenceOverTime";

function incidenceOverNumber(yData, xData) {} //Line Graph

function incidenceOverIncidence(yData, xData) {} //Bar Graph

const handleGraph = (xType, yData, xData) => {
	console.log(xType);
	if (xType === "date") {
		return incidenceOverTime(yData, xData);
	} else if (xType === "number") {
		return incidenceOverNumber(yData, xData);
	} else {
		return incidenceOverIncidence(yData, xData);
	}
};

const IncidenceOverXAnalyzer = () => {
	const parsedData = JSON.parse(localStorage.getItem("parsed_data"));

	const valueA = localStorage.getItem("valueA");
	const valueB = localStorage.getItem("valueB");
	const filteredA = parsedData.filter((m) => m.label === valueA)[0];
	const filteredB = parsedData.filter((m) => m.label === valueB)[0];

	const data = handleGraph(filteredB.type, filteredA, filteredB);
	return data;
};

export default IncidenceOverXAnalyzer;
