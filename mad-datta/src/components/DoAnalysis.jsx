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
    const data = [
        {
          date: '2024-05-27',
          Apples: 2890,
          Oranges: 2338,
          Tomatoes: 2452,
        },
        {
          date: '2024-05-28',
          Apples: 2756,
          Oranges: 2103,
          Tomatoes: 2402,
        },
        {
          date: '2024-05-29',
          Apples: 3322,
          Oranges: 986,
          Tomatoes: 1821,
        },
        {
          date: '2024-05-30',
          Apples: 3470,
          Oranges: 2108,
          Tomatoes: 2809,
        },
        {
          date: '2024-05-31',
          Apples: 3129,
          Oranges: 1726,
          Tomatoes: 2290,
        },
      ];
    if (analyzedData.chartType === "line" || 1===1) {
        chart = (
                <div>
                    <LineChart
                h={300}
                w={600}
                data={data}
                dataKey="date"
                series={[
                    { name: 'Apples', color: 'indigo.6' },
                    { name: 'Oranges', color: 'blue.6' },
                    { name: 'Tomatoes', color: 'teal.6' },
                ]}
                curveType="linear"
                />
                 
                </div>
                
             
        )
        console.log(chart)
    }
    return chart
}



export default DoAnalysis;