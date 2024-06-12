import sortDataByNumber from "../helpers/sortDataByNumber";
import { colors } from "../../../config";
import sortDataByValueByNumber from "../helpers/sortDataByValueByNumber";
export default function singleColumnFrequencyAnalyzer(histogram) {
	const parsedData = JSON.parse(localStorage.getItem("parsed_data"));
	const primarySelected = localStorage.getItem("primarySelected");
	const itemColumn = parsedData.filter((m) => m.label === primarySelected)[0];
	let counts = {};
	itemColumn.data.map((item) => {
		Object.keys(counts).includes(String(item))
			? counts[String(item)]++
			: (counts[String(item)] = 1);
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
