/**
 *
 * @param {Array} selected list of selected series
 * @param {Array} data raw data to be filtered
 * @param {string} type type of the data
 * @returns
 */
export default function seriesSelector(selected, data, dataKey) {
	const selectedNames = selected.map((n) => {
		return n.name;
	});
	console.log(selectedNames);
	let newData = data.map((point) => {
		const keys = Object.keys(point);
		let blank = {};
		keys.map((key) => {
			key === dataKey
				? (blank[key] = point[key])
				: selectedNames.includes(key)
				? (blank[key] = point[key])
				: null;
		});

		return blank;
	});
	console.log(data, newData);
	return newData;
}
