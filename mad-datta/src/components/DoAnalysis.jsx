import IncidenceOverXAnalyzer from "../analyzers/AOverB/IncidenceOverXAnalyzer"
import { useState } from "react";
import ReactiveLineChart from "./charts/ReactiveLineChart";
import { routes } from "../../config";
import { Navigate } from "react-router-dom";
const DoAnalysis = (props) => {
    
    try {
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
    } catch (error) {
        localStorage.setItem("analysis-error",error.message)
        console.log(error)
        return(<Navigate to={routes.analysis_main}/>);
    }
    
}



export default DoAnalysis;