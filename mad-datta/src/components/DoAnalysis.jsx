import { LineChart } from "@mantine/charts";
import IncidenceOverXAnalyzer from "../analyzers/AOverB/IncidenceOverXAnalyzer"
import { useState } from "react";
import ReactiveLineChart from "./charts/ReactiveLineChart";
import { routes } from "../../config";

const DoAnalysis = (props) => {
    let analyzedData;
    if(props.what === routes.a_over_b) {
        analyzedData = IncidenceOverXAnalyzer();
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