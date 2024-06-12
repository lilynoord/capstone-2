import { PieChart } from "@mantine/charts";

const ReactivePieChart = (props) => {
    const analyzedData = props.analyzedData;
    return <PieChart data={analyzedData.rawData.data} withLabelsLine labelsPosition="outside" labelsType="percent" withLabels withTooltip tooltipDataSource="segment" size={300}/>

}


export default ReactivePieChart;