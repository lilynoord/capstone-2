import { ScatterChart } from "@mantine/charts";

const ReactiveScatterChart = (props) => {
    const analyzedData = props.analyzedData 
    return (
        <> <h2>{analyzedData.title}</h2>
        <ScatterChart 
        w={600}
        h={300}
        data={analyzedData.data}
        dataKey={analyzedData.dataKey}
        xAxisLabel={analyzedData.xAxisLabel}
        yAxisLabel={analyzedData.yAxisLabel}
        withLegend
        />
        </>
       
    )
}

export default ReactiveScatterChart;