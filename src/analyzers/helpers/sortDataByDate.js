import { DateTime } from "luxon";
export default function sortDataByDate(unsortedData) {
	let data = [];
	const unsortedKeys = Object.keys(unsortedData);
	let sortedKeys = [];
	unsortedKeys.map((date) => {
		let index = 0;
		while (index < sortedKeys.length) {
			if (DateTime.fromISO(date) < DateTime.fromISO(sortedKeys[index])) {
				break;
			}
			index++;
		}
		sortedKeys.splice(index, 0, date);
	});
	//console.log(sortedKeys);
	sortedKeys.map((key) => {
		//console.log(unsortedData, key, typeof key, unsortedData[key]);
		data.push(unsortedData[key]);
	});
	//console.log(data);
	return data;
}
