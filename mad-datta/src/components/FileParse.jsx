import parser from "../parser.js"
import { useNavigate } from "react-router-dom";
import {routes} from "../../config.js"
const FileParse = () => {
	const fileText = JSON.parse(localStorage.getItem("uploadedFile"))
	let parsedData = parser(fileText)
	const parseStyle = {
		display: "flex",
		padding:'5px',
	}
	const columnStyle = {
		padding:'5px',
		textWrap: 'nowrap',
	}
	const nav = useNavigate()
	const handleGoodClick = () => {

	}

	const handleBadClick = () => {
		nav(routes.file_in)
	}

	let component = (
		<>
		<div >
			<button onClick={handleGoodClick}>Looks Good!</button>
		<> </>
		<button onClick={handleBadClick}>Re-upload</button>
		</div>
		<div>
			<h4>Columns: {parsedData.length} Rows: {parsedData[0].data.length}</h4>
		</div>
		<div style={parseStyle}>
			
				{parsedData.map(column => 
				<div style={columnStyle}>
					<div><strong>{column.label}</strong></div>
					<div>{column['data'].map(d => <p>{String(d)}</p>)}</div>
				</div>
				)}
			
			
		</div>
		</>
	)

	return component
};

export default FileParse;
