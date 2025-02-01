let StartFunc = ({ inDataToShow }) => {
    let jVarLocalData = inDataToShow;
    
    jFLocalToInnerHtmlServices({ inYourServices: jVarLocalData.ItemService });
    
};


let jFLocalToInnerHtmlServices = ({ inYourServices }) => {
    let jVarLocalHtmlId = 'ItemServiceSelectId';
    let jVarLocalDateTextId = document.getElementById(jVarLocalHtmlId);
    jVarLocalDateTextId.value = inYourServices;
};

export { StartFunc };