import { colors } from "../../../config";
export default function getSeries(data) {
	let colorIndex = 0;
	return Object.keys(data).map((m) => {
		colorIndex >= colors.length ? (colorIndex = 0) : colorIndex++;
		return { name: m, color: colors[colorIndex] };
	});
}
