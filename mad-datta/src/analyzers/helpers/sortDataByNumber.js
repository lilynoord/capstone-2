export default function sortDataByNumber(unsortedData) {
	let data = [];
	const unsortedKeys = Object.keys(unsortedData);
	let sortedKeys = [];
	unsortedKeys.map((key) => {
		let index = 0;
		key = Number(key);
		while (index < sortedKeys.length) {
			// console.log(index, sortedKeys.length, key, sortedKeys[index]);
			if (key < Number(sortedKeys[index])) {
				break;
			}
			index++;
		}

		sortedKeys.splice(index, 0, key);
		// console.log("splice", sortedKeys);
	});
	//console.log(sortedKeys);
	sortedKeys.map((key) => {
		//console.log(unsortedData, key, typeof key, unsortedData[key]);
		data.push(unsortedData[key]);
	});
	//console.log(data, unsortedData);
	return data;
}
