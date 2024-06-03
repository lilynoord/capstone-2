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
    
    if (analyzedData.chartType === "line"  ) {
        chart = (
                <div>
                    <LineChart
                w={600}
                h={300}
                data={analyzedData.data}
                dataKey={analyzedData.dataKey}
                series={analyzedData.series}
                curveType="linear"
                />
                 
                </div>
                
             
        )
       // console.log(chart)
    }
    return chart
}



export default DoAnalysis;