import { useNavigate } from "react-router-dom";
import {routes} from "../../config.js";
import { FileInput,Button} from '@mantine/core';
import { useState } from 'react';

// Reads the file as text and then stores it in session storage. 
const storeFile = async (file) => {
    const fileText = await file.text();
    localStorage.setItem("uploadedFile",JSON.stringify(fileText))
    return fileText;

  }


  
const FileIn = () => {
    const [value, setValue ]= useState(null);
    const nav = useNavigate()
    const handleClick = (evt) => {
        evt.preventDefault();
        console.log(value)
        const file = value
        storeFile(file);
        
        nav(routes.file_parse)
    }
    const style = {
      margin:'5px'
    }
    let thisForm = (
        <div style={style}>
      <FileInput
      label="Upload .tsv file"
      placeholder="upload"
      accept=".tsv"
      value={value} onChange={setValue}
      />
        <button style={style} onClick={handleClick}>Parse File</button>
        
      
        
      
    </div>
    

    )
   
    return thisForm;
    
  }


export default FileIn