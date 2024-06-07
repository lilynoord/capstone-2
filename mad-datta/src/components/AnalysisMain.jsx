import { Alert, Notification } from '@mantine/core'
import AnalysisCard from './cards/AnalysisCard.jsx'
 const AnalysisMain = () => {

    
    let passedError =  localStorage.getItem('analysis-error')
    const passedError2 =  localStorage.getItem('analysis-error2') // A whole bunch of bs to get around the fact that react calls everything twice....
    passedError ? localStorage.setItem('analysis-error2',passedError) : null
    passedError = passedError2 ? passedError2 : passedError;
    passedError ? localStorage.removeItem('analysis-error') : null;
    passedError2 ? localStorage.removeItem('analysis-error2') : null;
    

    return(
        
        <div>
            {passedError !== null ?  <Notification withCloseButton={false} withBorder color="red" radius="xs" title="Analysis Error"  >{passedError}</Notification> : null
            } 
            
            <table>
                <tbody>

                
                <tr>
                    <td>
                        
                            <AnalysisCard type="incidence-over-x" />
                        
                         
                    </td>
                    <td>
                        <AnalysisCard type="frequency-histogram" />
            
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
                </tr></tbody>
            </table>
            
            
           

        </div>
    )
}




export default AnalysisMain