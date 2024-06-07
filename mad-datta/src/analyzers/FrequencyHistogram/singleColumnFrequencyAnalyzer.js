import sortDataByNumber from "../helpers/sortDataByNumber";
export default function singleColumnFrequencyAnalyzer() {
	const parsedData = JSON.parse(localStorage.getItem("parsed_data"));
	const primarySelected = localStorage.getItem("primarySelected");
	const itemColumn = parsedData.filter((m) => m.label === primarySelected)[0];
	let counts = {};
	itemColumn.data.map((item) => {
		Object.keys(counts).includes(String(item))
			? counts[String(item)]++
			: (counts[String(item)] = 1);
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
	return dataPackage;
}
