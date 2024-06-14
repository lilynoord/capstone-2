import { Alert } from "@mantine/core"
import { useNavigate } from "react-router-dom";
import { routes } from "../../config";
 

const ErrorElement = () => {
    const nav = useNavigate();
    const upload = () => {nav(routes.file_in)}
    return (
    
    <Alert variant="filled" color="rgba(255, 125, 25, 1)" radius="md" title="Woops! Looks like something went wrong...." >
      Most likely the page you're trying to access doesn't exist, <br/>or else you tried to analyze a file without uploading it first. <br/>Let's go back and try again!
      <br/>
      <button onClick={upload}>Take me back!</button>
    </Alert>
  );
}


export default ErrorElement