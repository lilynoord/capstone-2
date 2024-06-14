import { Accordion, Select } from "@mantine/core";
import { useState } from "react";

const SubSelector = (props) => {
    
    return (<Select label="Select specific series:" data={props.options} onChange={(e) => {localStorage.setItem("subSelected",e) }}/>)
}


const eventOptionsGranulator = (data) => {
     return data.data.reduce((acc,data) => {
        !acc.includes(String(data)) ? acc.push(String(data)) : null; 
        return acc},[])
}
const FrequencyPieChartCard = () => {
    
    const [selected, setSelected] = useState(null)

    const [subSelectOptions, setSubSelectOptions] = useState(null)
    const [showSubSelector,setShowSubSelector] = useState(false)


    const parsedData = JSON.parse(localStorage.getItem("parsed_data"));


    const columnOptions = parsedData.map(m=>m.label);
 
    const numOptions = parsedData.filter(m=>m.type==="number").map(m=>m.label)
    const dateOptions = parsedData.filter(m=>m.type==="date").map(m=>m.label)
     
    const handlePrimarySelect = (e) => {
         
        const selectedData = parsedData.filter((m)=> m.label===e)[0];
        const type = selectedData.type;
        console.log(type)
        
        if (type==="string" || type === "boolean") {
            setSubSelectOptions(eventOptionsGranulator(selectedData))
            setShowSubSelector(true)
        } else {
            setSubSelectOptions(eventOptionsGranulator(selectedData))
            setShowSubSelector(true)
        }
    }
    const card = (
        <div>
            <Accordion id="acco"  >
                <Accordion.Item key="double" value="double" >
                <Accordion.Control onClick={(e) => {localStorage.setItem("singleColumnFrequency","false")}} >Double Column</Accordion.Control>
                <Accordion.Panel>
                    <Select placeholder="Select Column" label="Select primary data column:" data={columnOptions} onChange={(e)=>{setSelected(e);handlePrimarySelect(e);localStorage.setItem("primarySelected",e)}}/>
                    {showSubSelector ? <SubSelector options={subSelectOptions}/> : null}
                    <Select placeholder="Select Column" label="Select column to derive intervals from:" data={numOptions.concat(dateOptions)} onChange={ e=>localStorage.setItem("intervalSelected",e)}/>

                    </Accordion.Panel>
                    
                </Accordion.Item>
                <Accordion.Item key="single" value="single">
                <Accordion.Control onClick={(e) => {localStorage.setItem("singleColumnFrequency","true")}}>Single Column</Accordion.Control>
                <Accordion.Panel>
                    <Select placeholder="Select Column" label="Select primary data column:" data={columnOptions} onChange={(e)=>{setSelected(e);localStorage.setItem("primarySelected",e);localStorage.setItem("singleColumnFrequency","true")}}/>

                    </Accordion.Panel>
                    
                </Accordion.Item>
            </Accordion>
            
        </div>
    )





    return card
}


export default FrequencyPieChartCard