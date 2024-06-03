import { LineChart } from "@mantine/charts";
import { useState } from "react";


 let normalized = false;
const ReactiveLineChart = (props) => {
    let analyzedData = props.analyzedData;

    const [data, setData] = useState(analyzedData.dataAbsolute)
   
    const normalize = () => {
        console.log(normalized)
        
        let d = normalized ? analyzedData.dataNormalized :  analyzedData.dataAbsolute
        normalized = !normalized;
        return d
    }
    return  (
            <div>
                <LineChart
            w={600}
            h={300}
            data={data}
            dataKey={analyzedData.dataKey}
            series={analyzedData.series}
            curveType="linear"
            />
            <button onClick={() => {setData(normalize())}}>Toggle Normalized</button>
                
            </div>
            
            
    )
        
}




export default ReactiveLineChart;