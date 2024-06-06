import { Select } from "@mantine/core";
import { useState } from "react";

const SubSelector = (props) => {
     return (<Select label="Select specific series:" data={props.options} onChange={(e) => {localStorage.setItem("subSelected",e) }}/>)
}


const eventOptionsGranulator = (data) => {
    return data.data.reduce((acc,data) => {
        !acc.includes(data) ? acc.push(data) : null; 
        return acc},[])
}
const FrequencyHistogramCard = () => {
    const [selected, setSelected] = useState(null)
    
    const [subSelectOptions, setSubSelectOptions] = useState(null)
    const [showSubSelector,setShowSubSelector] = useState(false)


    const parsedData = JSON.parse(localStorage.getItem("parsed_data"));


    const columnOptions = parsedData.map(m=>m.label);
 
    const numOptions = parsedData.filter(m=>m.type==="number").map(m=>m.label)
    const dateOptions = parsedData.filter(m=>m.type==="date").map(m=>m.label)
     
    const handlePrimarySelect = (e) => {
         
        const selectedData = parsedData.filter((m)=> m.label===e)[0];
        console.log(selectedData)
        const type = selectedData.type;
        console.log(type)
        if (type==="string" || type === "boolean") {
            setSubSelectOptions(eventOptionsGranulator(selectedData))
            setShowSubSelector(true)
        } else {
            setShowSubSelector(true)
        }
    }
    const card = (
        <div>
            <Select placeholder="Select Column" label="Select primary data column:" data={columnOptions} onChange={(e)=>{setSelected(e);handlePrimarySelect(e);localStorage.setItem("primarySelected",e)}}/>
            {showSubSelector ? <SubSelector options={subSelectOptions}/> : null}
            <Select placeholder="Select Column" label="Select column to derive intervals from:" data={numOptions.concat(dateOptions)} onChange={ e=>localStorage.setItem("intervalSelected",e)}/>
        </div>
    )





    return card
}


export default FrequencyHistogramCard;