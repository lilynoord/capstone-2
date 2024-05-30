import { useNavigate } from "react-router-dom";
import {routes} from "../../config.js";


// Reads the file as text and then stores it in session storage. 
const storeFile = async (file) => {
    const fileText = await file.text();
    localStorage.setItem("uploadedFile",JSON.stringify(fileText))
    return fileText;

  }


  
const FileIn = () => {
    
    const nav = useNavigate()
    const handleClick = (evt) => {
        evt.preventDefault();
        console.log()
        const file = evt.target[0].files[0];
        storeFile(file);
        
        nav(routes.file_parse)
    }
    let thisForm = (
        <div>
      <form onSubmit={handleClick}>
        <input type="file" accept=".tsv" />
        <button>Parse File</button>
      </form>
      
    </div>
    

    )
   
    return thisForm;
    
  }


export default FileIn