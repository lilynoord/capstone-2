import IncidenceOverXAnalyzer from "../analyzers/AOverB/IncidenceOverXAnalyzer"
import { useState } from "react";
import ReactiveLineChart from "./charts/ReactiveLineChart";
import { routes } from "../../config";
import { Navigate } from "react-router-dom";
import ReactiveHistogramChart from "./charts/ReactiveHistogramChart";
import doubleColumnFrequencyAnalyzer from "../analyzers/FrequencyAnalysis/doubleColumnFrequencyAnalyzer";
import singleColumnFrequencyAnalyzer from "../analyzers/FrequencyAnalysis/singleColumnFrequencyAnalyzer";
import ReactivePieChart from "./charts/ReactivePieChart";
import singleSeriesScatterAnalyzer from "../analyzers/ScatterChart/singleSeriesScatterAnalyzer";
import multipleSeriesScatterAnalyzer from "../analyzers/ScatterChart/multipleSeriesScatterAnalyzer";
import ReactiveScatterChart from "./charts/ReactiveScatterChart";

const DoAnalysis = (props) => {
    
    try {
        let analyzedData;
        if(props.what === routes.a_over_b) {
            
                analyzedData = IncidenceOverXAnalyzer();
            
            
        } else if(props.what=== routes.frequency_histogram) {
            console.log(JSON.parse(localStorage.getItem('singleColumnFrequency')))
            analyzedData = JSON.parse(localStorage.getItem('singleColumnFrequency')) 
            ? singleColumnFrequencyAnalyzer(true) 
            : doubleColumnFrequencyAnalyzer(true);
        } else if(props.what=== routes.frequency_pie) {
            console.log(JSON.parse(localStorage.getItem('singleColumnFrequency')))
            analyzedData = JSON.parse(localStorage.getItem('singleColumnFrequency')) 
            ? singleColumnFrequencyAnalyzer(false) 
            : doubleColumnFrequencyAnalyzer(false);
        } else if (props.what === routes.scatter_chart){
            analyzedData = JSON.parse(localStorage.getItem("singleSeries")) 
            ? singleSeriesScatterAnalyzer() 
            : multipleSeriesScatterAnalyzer(); 
            
        } else {
            analyzedData = "null"
        }
        let chart;
        
        if (analyzedData.chartType === "line"  ) {
            return (<ReactiveLineChart analyzedData={analyzedData}/>)
        } else if (analyzedData.chartType === "histogram") {
            return (<ReactiveHistogramChart analyzedData={analyzedData}/>)
        } else if (analyzedData.chartType === "pieChart"){
            return (<ReactivePieChart analyzedData={analyzedData}/>)
        } else if (analyzedData.chartType === "scatter"){
            return (<ReactiveScatterChart analyzedData={analyzedData}/>)
        }
        return chart
    } catch (error) {
        localStorage.setItem("analysis-error",error)
        console.log(error)
        return(<Navigate to={routes.analysis_main}/>);
    }
    
}



export default DoAnalysis;