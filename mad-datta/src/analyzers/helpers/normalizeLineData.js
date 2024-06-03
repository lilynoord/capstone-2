export default function normalizeLineData(absoluteData) {
	let normalizedData = [];
	let totals = [];
	absoluteData.map((data) => {
		const keys = Object.keys(data);
		let total = 0;
		keys.map((key) => {
			typeof data[key] === "number" ? (total += data[key]) : null;
		});
		let blank = {};
		keys.map((key) => {
			typeof data[key] === "number"
				? (blank[key] = Math.round((data[key] / total) * 100 * 100) / 100)
				: (blank[key] = data[key]);
		});
		normalizedData.push(blank);
	});
	return normalizedData;
}
