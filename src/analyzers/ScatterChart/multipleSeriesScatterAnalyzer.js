import getSeries from "../helpers/getSeries";
import normalizeLineData from "../helpers/normalizeLineData";
import normalizeScatterData from "../helpers/normalizeScatterData";

const getDataPoints = (xColumn, yColumn, seriesColumn, groupName) => {
	let indices = [];
	seriesColumn.data.map((item, index) =>
		String(item) === String(groupName) ? indices.push(index) : null
	);

	return indices.map((i) => {
		return { x: Number(xColumn.data[i]), y: yColumn.data[i] };
	});
};
export default function multipleSeriesScatterAnalyzer() {
	const primarySelectedLabel = localStorage.getItem("primarySelected");
	const xAxisLabel = localStorage.getItem("xAxis");
	const yAxisLabel = localStorage.getItem("yAxis");
	if (!primarySelectedLabel || !xAxisLabel || !yAxisLabel) {
		throw new Error("Please make required selections");
	}
	const parsedData = JSON.parse(localStorage.getItem("parsed_data"));

	const seriesColumn = parsedData.filter(
		(m) => m.label === primarySelectedLabel
	)[0];
	const xColumn = parsedData.filter((m) => m.label === xAxisLabel)[0];
	const yColumn = parsedData.filter((m) => m.label === yAxisLabel)[0];
	const series = getSeries(seriesColumn);

	const data = series.map((group) => {
		return {
			color: group.color,
			name: group.name,
			data: getDataPoints(xColumn, yColumn, seriesColumn, group.name),
		};
	});

	let dataPackage = {
		title: `${yAxisLabel} by ${xAxisLabel} for ${primarySelectedLabel}`,
		chartType: "scatter",
		data,
		dataKey: { x: "x", y: "y" },
		xAxisLabel,
		yAxisLabel,
		series,
	};
	dataPackage.normalizedData = normalizeScatterData(data);
	console.log(dataPackage);
	return dataPackage;
}
