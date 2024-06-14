import { colors } from "../../../config";
import sortDataByNumber from "../helpers/sortDataByNumber";
import sortDataByValueByNumber from "../helpers/sortDataByValueByNumber";

export default function doubleColumnFrequencyAnalyzer(histogram) {
	//Get all the column data we need
	const subSelected = localStorage.getItem("subSelected");
	const primarySelected = localStorage.getItem("primarySelected");
	const intervalSelected = localStorage.getItem("intervalSelected");

	if (!subSelected || !primarySelected || !intervalSelected) {
		throw new Error("Please make required selections");
	}

	const parsedData = JSON.parse(localStorage.getItem("parsed_data"));
	const itemColumn = parsedData.filter((m) => m.label === primarySelected)[0];
	const intervalColumn = parsedData.filter(
		(m) => m.label === intervalSelected
	)[0];

	//Get the indices of each entry that matches the selected option
	let indices = [];
	itemColumn.data.map((item, index) =>
		String(item) === subSelected ? indices.push(index) : null
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

	if (histogram) {
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
	} else {
		let data = [];
		let colorIndex = 0;
		Object.keys(counts).map((interval) => {
			colorIndex >= colors.length ? (colorIndex = 0) : colorIndex++;
			data.push({
				name: interval,
				value: counts[interval],
				color: colors[colorIndex],
			});
		});
		const dataPackage = {
			chartType: "pieChart",
			rawData: {
				data: sortDataByValueByNumber(data),
			},
		};
		console.log(dataPackage);
		return dataPackage;
	}
}
