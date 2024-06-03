import { LineChart } from "@mantine/charts";
import AOverBAnalyzer from "../analyzers/AOverB/AOverBAnalyzer"
import { useState } from "react";
import ReactiveLineChart from "./charts/LineChart";

const DoAnalysis = (props) => {
    let analyzedData;
    if(props.what === "a-over-b") {
        analyzedData = AOverBAnalyzer();
    } else {
        analyzedData = "null"
    }

    let chart;
    
    if (analyzedData.chartType === "line"  ) {
        return (<ReactiveLineChart analyzedData={analyzedData}/>)
    }
    return chart
}



export default DoAnalysis;