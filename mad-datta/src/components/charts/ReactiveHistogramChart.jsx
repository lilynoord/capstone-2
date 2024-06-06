import { BarChart } from "@mantine/charts";

export default function ReactiveHistogramChart(props) {
    const analyzedData = props.analyzedData;
    const selectedData = analyzedData.rawData;
    return (
        <BarChart w={600}
        h={300} dataKey={analyzedData.dataKey} data={selectedData.data} series={selectedData.series}/>
    )

}