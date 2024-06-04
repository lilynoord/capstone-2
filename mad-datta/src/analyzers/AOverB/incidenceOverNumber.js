import seriesPairwiseForLine from "../helpers/seriesPairwiseForLine";
import normalizeLineData from "../helpers/normalizeLineData";
import sortDataByNumber from "../helpers/sortDataByNumber";

export default function incidenceOverNumber(yData, xData) {
	let dataPackage = {};
	dataPackage.chartType = "line";
	let pairwise;
	[dataPackage.series, pairwise] = seriesPairwiseForLine(yData, xData);
	// console.log(dataPackage, pairwise);
	//OOP:
	//1: Combine y-x pairwise - list of lists
	//2: Create blank dict of values:
	//   blank = {number:, Apples:0,Oranges:0,...}
	//3: Operate through y-x list, sorting into a dict of blanks by date
	//4: Place blanks into list sorted by number low->high
	//5: Optional but ideal: Go through the list and tween any gaps
	let blank = {};
	console.log("blank object: ", blank);
	dataPackage.series.map((data) => {
		//console.log(data);
		blank[data.name] = 0;
	});
	let unsortedData = {};
	blank.number = "";
	//console.log(blank, blank.number);

	pairwise.map((pair) => {
		if (Object.keys(unsortedData).includes(String(pair[1]))) {
			unsortedData[pair[1]][pair[0]] += 1;
		} else {
			unsortedData[pair[1]] = structuredClone(blank);

			unsortedData[pair[1]].number = pair[1];
			unsortedData[pair[1]][pair[0]] += 1;
		}
	});
	console.log(unsortedData);
	dataPackage.dataAbsolute = sortDataByNumber(unsortedData);
	dataPackage.dataKey = "number";
	dataPackage.dataNormalized = normalizeLineData(dataPackage);

	console.log(dataPackage);
	return dataPackage;
} //Line Graph
