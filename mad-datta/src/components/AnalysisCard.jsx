import { Select, Card, Text} from "@mantine/core"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { routes } from "../../config";
import AOverBCard from "./AOverBCard";








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
    if (type === "a-over-b"){
        title = "A over B"
        card = (<AOverBCard/> )
        redirectURL = routes.a_over_b
    } else {
        title = "Null"
        card = (<Text>"Not Found"</Text>)
    }


    return (
        <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Card.Section withBorder>
                <Text>{title}</Text>
            </Card.Section>
        {card}
        <button onClick={handleClick}style={{marginTop:'10px'}}>Go!</button>
        </Card>
    )
}


export default AnalysisCard