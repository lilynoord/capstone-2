import { LineChart } from "@mantine/charts";
import AOverBAnalyzer from "../analyzers/AOverBAnalyzer"

const DoAnalysis = (props) => {
    let analyzedData;
    if(props.what === "a-over-b") {
        analyzedData = AOverBAnalyzer();
    } else {
        analyzedData = "null"
    }

    let chart;

    if (analyzedData.chartType === "line") {
        chart = (
            <div>
                <LineChart />
            </div>
        )
    }
    return chart
}



export default DoAnalysis;