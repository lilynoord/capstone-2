

const FileDetails = () => {
    const fileText = JSON.parse(localStorage.getItem("uploadedFile"))
    let fileHeaders = parseFileHeaders(fileText);
    let component = (<></>)
    return component
}


export default FileDetails