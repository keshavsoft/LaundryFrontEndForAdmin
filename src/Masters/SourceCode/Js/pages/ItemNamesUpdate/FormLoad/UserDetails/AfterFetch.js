let StartFunc = ({ inDataToShow }) => {
    let jVarLocalData = inDataToShow;    
    jFLocalToInnerHtmlyourUsernameTextId({ inyourCategory: jVarLocalData.Category })
    jFLocalToInnerHtmlyourPasswordTextId({ inyourItemType: jVarLocalData.ItemType });
    jFLocalToInnerHtmlUserMobileTextId({ inYourServices: jVarLocalData.Service });
    jFLocalToInnerHtmlyourBranchTextId({ inyourPcs: jVarLocalData.Pcs });
    jFLocalToInputyourMobileTextId({ inYourRate: jVarLocalData.DryWashRate });
    jFLocalToInputyourName({ inYourName: jVarLocalData.ItemName });
    
};

let jFLocalToInnerHtmlyourUsernameTextId = ({ inyourCategory }) => {
    let jVarLocalHtmlId = 'CategoryId';
    let jVarLocalVoucherNumberTextId = document.getElementById(jVarLocalHtmlId);
    jVarLocalVoucherNumberTextId.value = inyourCategory;
};

let jFLocalToInnerHtmlyourPasswordTextId = ({ inyourItemType }) => {
    let jVarLocalHtmlId = 'ItemTypeSelectId';
    let jVarLocalDescriptionTextId = document.getElementById(jVarLocalHtmlId);
    jVarLocalDescriptionTextId.value = inyourItemType;
};

let jFLocalToInnerHtmlUserMobileTextId = ({ inYourServices }) => {
    let jVarLocalHtmlId = 'ItemServiceSelectId';
    let jVarLocalDateTextId = document.getElementById(jVarLocalHtmlId);
    jVarLocalDateTextId.value = inYourServices;
};

let jFLocalToInnerHtmlyourBranchTextId = ({ inyourPcs }) => {
    let jVarLocalHtmlId = 'Pcs';
    let jVarLocalFactoryTextId = document.getElementById(jVarLocalHtmlId);
    jVarLocalFactoryTextId.value = inyourPcs;
};

let jFLocalToInputyourMobileTextId = ({ inYourRate }) => {
    let jVarLocalHtmlId = 'DryWashRate';
    let jVarLocalpkDCDetailsTextId = document.getElementById(jVarLocalHtmlId);
    jVarLocalpkDCDetailsTextId.value = inYourRate;
    
};
let jFLocalToInputyourName = ({ inYourName }) => {
    let jVarLocalHtmlId = 'ItemNameInputId';
    let jVarLocalpkDCDetailsTextId = document.getElementById(jVarLocalHtmlId);
    jVarLocalpkDCDetailsTextId.value = inYourName;
    
};

export { StartFunc };