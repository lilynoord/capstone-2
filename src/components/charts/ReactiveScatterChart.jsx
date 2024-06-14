import { ScatterChart } from "@mantine/charts";

const ReactiveScatterChart = (props) => {
    const analyzedData = props.analyzedData 
    return (
        <ScatterChart 
        w={600}
        h={300}
        data={analyzedData.data}
        dataKey={analyzedData.dataKey}
        xAxisLabel={analyzedData.xAxisLabel}
        yAxisLabel={analyzedData.yAxisLabel}

        />
    )
}

export default ReactiveScatterChart;