import { colors } from "../../../config";

export default function seriesPairwiseForLine(yData, xData) {
	let series = yData.data.reduce((acc, data) => {
		!acc.includes(data) ? acc.push(data) : null;
		return acc;
	}, []);
	let colorIndex = 0;
	series = series.map((m) => {
		colorIndex >= colors.length ? (colorIndex = 0) : colorIndex++;
		return { name: m, color: colors[colorIndex] };
	});
	const yLen = yData.data.length;
	const xLen = xData.data.length;
	let pairwise = [];
	if (yLen !== xLen) {
		throw new Error("Data range mismatch");
	} else {
		for (let i = 0; i < yLen; i++) {
			pairwise.push([yData.data[i], xData.data[i]]);
		}
	}

	return [series, pairwise];
}
