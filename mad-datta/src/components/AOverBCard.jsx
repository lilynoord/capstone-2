import { Select,  } from "@mantine/core"
import { useEffect, useState } from "react";
 useEffect
const AOverBCard = () =>
    {
        
    const [valueA, setValueA ]= useState(null);
    const updateA = () => {localStorage.setItem("valueA",valueA)}
    const [valueB, setValueB ]= useState(null);
    const parsedData = JSON.parse(localStorage.getItem("parsed_data"))
        
    const options = parsedData.map((m) => m.label)
    const card = (
        <div>
            <Select label="Column A (Y-Axis)" placeholder="Select Column" data={options} value={valueA} onChange={(e) =>{setValueA(e);localStorage.setItem("valueA",e)}}/>
            <Select label="Column B (X-Axis)" placeholder="Select Column" data={options} value={valueB} onChange={(e) => {setValueB(e);localStorage.setItem("valueB",e)}}/>
            
        </div>
        
    )

    return card
    }


export default AOverBCard