import { Select, Card, Text} from "@mantine/core"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { routes } from "../../../config";
import IncidenceOverXCard from "./IncidenceOverXCard";
import FrequencyHistogramCard from "./FrequencyHistogramCard";
import FrequencyPieChartCard from "./FrequencyPieChartCard";
import ScatterChartCard from "./ScatterChartCard";







const AnalysisCard = (props) => {
    const type= props.type

    const cardStyle = {
        border: '1px black'
    }
    let card
    let title
    let redirectURL

    const nav = useNavigate()
    const handleClick = () => {
        nav(redirectURL)
    }
    if (type === "incidence-over-x"){
        title = "Incidence-Over-X"
        card = (<IncidenceOverXCard/> )
        redirectURL = routes.a_over_b
    } else if (type === "frequency-histogram"){
        title = "Frequency Histogram"
        card =(<FrequencyHistogramCard/>)
        redirectURL = routes.frequency_histogram
    } else if (type === "frequency-pie"){
        title = "Frequency Pie Chart"
        card =(<FrequencyPieChartCard/>)
        redirectURL = routes.frequency_pie
    } else if (type === "scatter-chart"){
        title = "Scatter Chart"
        card =(<ScatterChartCard/>)
        redirectURL = routes.scatter_chart
    } else {
        title = "Null"
        card = (<Text>"Not Found"</Text>)
    }


    return (
        <Card w={300} h={350} shadow="sm" padding="lg" radius="md" withBorder>
            <Card.Section withBorder>
                <Text>{title}</Text>
            </Card.Section>
        {card}
        <button onClick={handleClick}style={{marginTop:'10px'}}>Go!</button>
        </Card>
    )
}


export default AnalysisCard