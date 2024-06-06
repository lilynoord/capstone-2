import getSeries from "../helpers/getSeries";
import sortDataByNumber from "../helpers/sortDataByNumber";

export default function frequencyAnalyzer() {
	//Get all the column data we need
	const subSelected = localStorage.getItem("subSelected");
	const primarySelected = localStorage.getItem("primarySelected");
	const intervalSelected = localStorage.getItem("intervalSelected");
	const parsedData = JSON.parse(localStorage.getItem("parsed_data"));
	const itemColumn = parsedData.filter((m) => m.label === primarySelected)[0];
	const intervalColumn = parsedData.filter(
		(m) => m.label === intervalSelected
	)[0];

	//Get the indices of each entry that matches the selected option
	let indices = [];
	itemColumn.data.map((item, index) =>
		item === subSelected ? indices.push(index) : null
	);

	//Get the raw intervals that match the selected option
	let intervalsRaw = indices.map((i) => {
		return intervalColumn.data[i];
	});

	//Create an object containing the counts of each interval
	let counts = {};
	console.log(intervalsRaw);
	intervalsRaw.map((interval) => {
		Object.keys(counts).includes(String(interval))
			? counts[String(interval)]++
			: (counts[String(interval)] = 1);
	});
	let data = [];

	Object.keys(counts).map((interval) => {
		data.push({ interval: interval, frequency: counts[interval] });
	});
	const dataPackage = {
		chartType: "histogram",
		dataKey: "interval",
		rawData: {
			series: [{ name: "frequency", color: "blue.6" }],
			data: sortDataByNumber(data),
		},
	};
	console.log(dataPackage);
	return dataPackage;
}
