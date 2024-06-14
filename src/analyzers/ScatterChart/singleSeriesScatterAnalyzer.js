export default function singleSeriesScatterAnalyzer() {
	const xAxisLabel = localStorage.getItem("xAxis");
	const yAxisLabel = localStorage.getItem("yAxis");
	if (!xAxisLabel || !yAxisLabel) {
		throw new Error("Please make required selections");
	}
	const parsedData = JSON.parse(localStorage.getItem("parsed_data"));
	const xColumn = parsedData.filter((m) => m.label === xAxisLabel)[0];
	const yColumn = parsedData.filter((m) => m.label === yAxisLabel)[0];
	const data = [
		{
			color: "blue.6",
			name: "data",
			data: xColumn.data.map((row, index) => {
				return { x: xColumn.data[index], y: yColumn.data[index] };
			}),
		},
	];
	console.log(data);
	return {
		title: `${yAxisLabel} over ${xAxisLabel}`,
		chartType: "scatter",
		data,
		dataKey: { x: "x", y: "y" },
		xAxisLabel,
		yAxisLabel,
		series: null,
	};
}
