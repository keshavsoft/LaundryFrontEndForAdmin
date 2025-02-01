let StartFunc = ({ inDataToShow }) => {
    let jVarLocalData = inDataToShow;
    
    jFLocalToInnerHtmlyourPasswordTextId({ inyourItemType: jVarLocalData.ItemType });
    
};

let jFLocalToInnerHtmlyourPasswordTextId = ({ inyourItemType }) => {
    let jVarLocalHtmlId = 'ItemTypeSelectId';
    let jVarLocalDescriptionTextId = document.getElementById(jVarLocalHtmlId);
    jVarLocalDescriptionTextId.value = inyourItemType;
};

export { StartFunc };