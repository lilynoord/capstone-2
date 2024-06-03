import { LineChart } from "@mantine/charts";
import { Checkbox } from "@mantine/core";
import { useState } from "react";
import seriesSelector from "./seriesSelector";


let normalized = false;
const ReactiveLineChart = (props) => {
    let analyzedData = props.analyzedData;
     const dataKey = analyzedData.dataKey;
    const [data, setData] = useState(analyzedData.dataAbsolute);
    const masterSeries = structuredClone(analyzedData.series);
    const masterDataAbsolute = structuredClone(analyzedData.dataAbsolute);
    const masterDataNormalized = structuredClone(analyzedData.dataNormalized);
    let masterData = masterDataAbsolute;
    Object.freeze(masterSeries);
    Object.freeze(masterDataAbsolute);
    Object.freeze(masterDataNormalized);

   


    const normalize = () => {
      
        normalized = !normalized;
        masterData = normalized ? masterDataNormalized : masterDataAbsolute;
         return  normalized ? analyzedData.dataNormalized :  analyzedData.dataAbsolute;
        
        
    }
    
    const [series, setSeries] = useState(structuredClone(analyzedData.series));
    const pushPopSeries = (item) => {
        let seriesSplice = structuredClone(series);
        let i = 0;
        seriesSplice.some((element,index) =>{
            i = index; 
            console.log(element.name === item.name)
            return element.name === item.name
        }) 
        ? seriesSplice.splice(i,1) 
        : seriesSplice.push(item);
        
        return seriesSplice;
    }
    return  (
            <div>
            <table>
                <tr>
                    <td>
                    <LineChart
                        w={600}
                        h={300}
                        data={data}
                        dataKey={dataKey}
                        series={series}
                        curveType="linear"
                     />
                    </td>
                    <td>
                        <ul>
                            {masterSeries.map((s ) => 
                            <Checkbox 
                            defaultChecked 
                            label={s.name} 
                            color={s.color}
                             
                            onChange={() =>{
                                
                                const newSeries = pushPopSeries(s);
                                setSeries(newSeries);
                                masterData = normalized ? masterDataNormalized : masterDataAbsolute;
                                const newData = seriesSelector(newSeries,masterData,dataKey);
                                setData(newData);

                                 
                            }}/>
                            )}
                        </ul>
                    </td>
                </tr>
                <tr>
                    <td>
                    <Checkbox   size="md" label={"Normalize Data"} onChange={()=> {setData(normalize())}}/>
                         
                    </td>
                </tr>
            </table>
                
            
                
            </div>
            
            
    )
        
}




export default ReactiveLineChart;