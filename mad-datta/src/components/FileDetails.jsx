import parser from '../parser.js'

const FileDetails = () => {
    const fileText = JSON.parse(localStorage.getItem("uploadedFile"))
    let parsedData = parser(fileText);
    console.log(parsedData)
    let component = (<><div><p></p></div></>)
    return component
}


export default FileDetails