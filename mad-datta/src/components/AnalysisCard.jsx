const getCardType = (type) => {
    let card = (<div><h1>{type}</h1></div>)
    return card
}
 


const AnalysisCard = (props) => {
    const card = getCardType(props.type)

    return card;
}


export default AnalysisCard