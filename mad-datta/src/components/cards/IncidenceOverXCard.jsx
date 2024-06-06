import { Select,  } from "@mantine/core"
import {  useState } from "react";
const IncidenceOverXCard = () =>
    {
        
    const [valueA, setValueA ]= useState(null);
    const updateA = () => {localStorage.setItem("valueA",valueA)}
    const [valueB, setValueB ]= useState(null);
    const parsedData = JSON.parse(localStorage.getItem("parsed_data"))
        
    const options = parsedData.map((m) => m.label)
    const card = (
        <div>
            <Select label="Select column to represent incidence (y-axis):" placeholder="Select Column" data={options} value={valueA} onChange={(e) =>{setValueA(e);localStorage.setItem("valueA",e)}}/>
            <Select label="Select column to use as x-axis: " placeholder="Select Column" data={options} value={valueB} onChange={(e) => {setValueB(e);localStorage.setItem("valueB",e)}}/>
            
        </div>
        
    )

    return card
    }


export default IncidenceOverXCard