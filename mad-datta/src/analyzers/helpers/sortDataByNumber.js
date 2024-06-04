export default function sortDataByNumber(unsortedData) {
	let data = [];
	const unsortedKeys = Object.keys(unsortedData);
	let sortedKeys = [];
	unsortedKeys.map((key) => {
		let index = 0;
		while (index < sortedKeys.length) {
			if (key < sortedKeys[index]) {
				break;
			}
			index++;
		}
		sortedKeys.splice(index, 0, key);
	});
	//console.log(sortedKeys);
	sortedKeys.map((key) => {
		//console.log(unsortedData, key, typeof key, unsortedData[key]);
		data.push(unsortedData[key]);
	});
	//console.log(data, unsortedData);
	return data;
}
