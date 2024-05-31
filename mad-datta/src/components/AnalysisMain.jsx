import {url} from '../../config.js'
import AnalysisCard from './AnalysisCard.jsx'

const AnalysisMain = () => {
    return(
        <div>
            <table>
                <tr>
                    <td>
                        <AnalysisCard type="Histogram" />
                    </td>
                    <td>
                        <AnalysisCard type="Bar graph" />
            
                    </td>
                    <td>
                        <AnalysisCard type="Line Graph" />
                    </td>
                </tr>
                <tr>
                    <td>
                    <AnalysisCard type="A" />
                    </td>
                    <td>
                    <AnalysisCard type="Histogram" />
                    </td>
                    <td>
                        
                    </td>
                </tr>
                <tr>
                    <td>

                    </td>
                    <td>
                        
                    </td>
                    <td>
                        
                    </td>
                </tr>
            </table>
            
            
           

        </div>
    )
}




export default AnalysisMain