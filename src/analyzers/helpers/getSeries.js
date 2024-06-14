import { colors } from "../../../config";
export default function getSeries(column) {
	let colorIndex = 0;
	// if the series are already defined as options, returns a list of them in {name,color} format
	// else, reduces to get the options and then returns the series list.
	return column.options
		? column.options.map((m) => {
				colorIndex >= colors.length ? (colorIndex = 0) : colorIndex++;
				return { name: m, color: colors[colorIndex] };
		  })
		: column.data
				.reduce((acc, data) => {
					!acc.includes(data) ? acc.push(data) : null;
					return acc;
				}, [])
				.map((m) => {
					colorIndex >= colors.length ? (colorIndex = 0) : colorIndex++;
					return { name: m, color: colors[colorIndex] };
				});
}
