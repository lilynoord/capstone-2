const routes = {
	file_in: "/",
	file_parse: "/file-parse",
	analysis_main: "/analysis-main",
	a_over_b: "/incidence-over-x",
	frequency_histogram: "/frequency-histogram",
	frequency_pie: "/frequency-pie-chart",
	scatter_chart: "/scatter_chart",
};

const url = "https://image-charts.com/chart?";

const colors = [
	"gray.9",
	"grape.9",
	"blue.9",
	"green.9",
	"orange.9",
	"violet.9",
	"red.9",
	"cyan.9",
	"lime.9",
	"pink.9",
	"indigo.9",
	"teal.9",
	"yellow.9",
	"gray.4",
	"grape.1",
	"blue.1",
	"green.1",
	"orange.1",
	"violet.1",
	"red.1",
	"cyan.1",
	"lime.1",
	"pink.1",
	"indigo.1",
	"teal.1",
	"yellow.1",
	"gray.5",
	"grape.5",
	"blue.5",
	"green.5",
	"orange.5",
	"violet.5",
	"red.5",
	"cyan.5",
	"lime.5",
	"pink.5",
	"indigo.5",
	"teal.5",
	"yellow.5",
];

const cleanStorage = () => {
	localStorage.removeItem("primarySelected");
	localStorage.removeItem("singleColumnFrequency");
	localStorage.removeItem("singleSeries");
	localStorage.removeItem("valueA");
	localStorage.removeItem("valueB");
	localStorage.removeItem("xAxis");
	localStorage.removeItem("yAxis");
	localStorage.removeItem("intervalSelected");
	localStorage.removeItem("subSelected");
};
export { routes, url, colors, cleanStorage };
