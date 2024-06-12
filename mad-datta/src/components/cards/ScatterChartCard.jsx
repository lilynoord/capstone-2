import { Accordion, Select } from "@mantine/core";
import { useState } from "react";

const ScatterChartCard = () => {
    const parsedData = JSON.parse(localStorage.getItem("parsed_data"));

    
    const columnOptions = parsedData.map(m=>m.label);
    const card = (
    <div>
        <Accordion id="acco"  >
            <Accordion.Item key="double" value="double" >
            <Accordion.Control onClick={(e) => {localStorage.setItem("singleSeries","false")}} >Multiple Series</Accordion.Control>
            <Accordion.Panel>
                <Select placeholder="Select Column" label="Select column to derive series from:" data={columnOptions} onChange={(e)=>{localStorage.setItem("primarySelected",e)}}/>
                <Select placeholder="Select Column" label="Select y-axis column" data={columnOptions} onChange={ e=>localStorage.setItem("yAxis",e)}/>
                <Select placeholder="Select Column" label="Select x-axis column" data={columnOptions} onChange={ e=>localStorage.setItem("xAxis",e)}/>

                </Accordion.Panel>
                
            </Accordion.Item>
            <Accordion.Item key="single" value="single">
            <Accordion.Control onClick={(e) => {localStorage.setItem("singleSeries","true")}}>Single Series</Accordion.Control>
            <Accordion.Panel>
            <Select placeholder="Select Column" label="Select y-axis column" data={columnOptions} onChange={ e=>localStorage.setItem("yAxis",e)}/>
            <Select placeholder="Select Column" label="Select x-axis column" data={columnOptions} onChange={ e=>localStorage.setItem("xAxis",e)}/>

                </Accordion.Panel>
                
            </Accordion.Item>
        </Accordion>
        
    </div>
    )
    return card;
}

export default ScatterChartCard;