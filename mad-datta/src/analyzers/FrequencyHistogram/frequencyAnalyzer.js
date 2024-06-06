export default function frequencyAnalyzer() {
	const subSelected = localStorage.getItem("subSelected");
	const primarySelected = localStorage.getItem("primarySelected");
	const intervalSelected = localStorage.getItem("intervalSelected");
	const parsedData = JSON.parse(localStorage.getItem("parsed_data"));
	const itemColumn = parsedData.filter((m) => m.label === primarySelected)[0];
	const intervalColumn = parsedData.filter(
		(m) => m.label === intervalSelected
	)[0];
	let indices = [];
	itemColumn.data.map((item, index) =>
		item === subSelected ? indices.push(index) : null
	);
	let intervalsRaw = indices.map((i) => {
		console.log(i, intervalColumn.data[i]);
		return intervalColumn.data[i];
	});
	console.log(
		subSelected,
		primarySelected,
		intervalSelected,
		itemColumn,
		intervalColumn,
		indices,
		intervalsRaw
	);
}
