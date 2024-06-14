/**
 * Sorts unsorted data from low to high according to the 'value' key.
 *
 * @param {*} unsortedData array of unsorted data. Each data point must be an obj with a 'value' key.
 * @returns
 */
export default function sortDataByValueByNumber(unsortedData) {
	let sortedData = [];

	unsortedData.map((data) => {
		let index = 0;
		for (index = 0; index < sortedData.length; index++) {
			if (Number(data.value) < Number(sortedData[index].value)) {
				break;
			}
		}
		sortedData.splice(index, 0, data);
	});
	console.log("Sorted Data: ", sortedData);
	return sortedData;
}
