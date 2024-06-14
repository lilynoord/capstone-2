export default function normalizeLineData(dataPackage) {
	let normalizedData = [];
	let absoluteData = dataPackage.dataAbsolute;
	absoluteData.map((data) => {
		const keys = Object.keys(data);
		let total = 0;
		keys.map((key) => {
			key !== dataPackage.dataKey ? (total += data[key]) : null;
		});
		let blank = {};

		keys.map((key) => {
			key !== dataPackage.dataKey
				? (blank[key] = Math.round((data[key] / total) * 100 * 100) / 100)
				: (blank[key] = data[key]);
		});
		normalizedData.push(blank);
	});
	return normalizedData;
}
